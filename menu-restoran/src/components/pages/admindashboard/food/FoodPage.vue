<template>
    <div class="overflow-x-auto overflow-y-auto text-[#3a3b38]">
        <!-- Loading state -->
        <TableSkeleton v-if="isLoading" :rows="8" />

        <!-- Error state -->
        <div v-else-if="error" class="text-center py-8 text-red-600">
            <p>Error: {{ error }}</p>
        </div>

        <!-- Table -->
        <table v-else class="table table-zebra bg-[#f3f3f3]">
            <thead>
                <tr>
                    <th>No</th>
                    <th class="min-w-50">Food Name</th>
                    <th class="min-w-32">Price</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(food, index) in foods" :key="food.id">
                    <th>{{ index + 1 }}</th>
                    <td>
                        <input 
                            v-if="editingId === food.id"
                            v-model="editForm.name"
                            type="text"
                            class="input input-sm input-bordered w-full"
                        />
                        <span v-else>{{ food.name }}</span>
                    </td>
                    <td>
                        <input 
                            v-if="editingId === food.id"
                            v-model="editForm.price"
                            type="number"
                            class="input input-sm input-bordered w-full"
                        />
                        <span v-else>Rp {{ formatPrice(food.price) }}</span>
                    </td>
                    <td>
                        <div class="flex gap-2">
                            <button 
                                v-if="editingId !== food.id"
                                @click="startEdit(food)"
                                class="btn btn-sm bg-border hover:bg-border2 "
                            >
                                Edit
                            </button>
                            <template v-else>
                                <button 
                                    @click="saveEdit(food.id)"
                                    class="btn btn-sm bg-[#6abe3f]"
                                    :disabled="saving"
                                >
                                    {{ saving ? 'Saving...' : 'Save' }}
                                </button>
                                <button 
                                    @click="cancelEdit"
                                    class="btn btn-sm btn-ghost"
                                >
                                    Cancel
                                </button>
                            </template>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Success message -->
        <div v-if="successMessage" class="alert alert-success mt-4">
            {{ successMessage }}
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../../../../lib/supabase'
import TableSkeleton from '../../../skeleton/TableSkeleton.vue';
import { useLoading } from '../../../../composable/useLoading';

const foods = ref([])
const error = ref(null)
const editingId = ref(null)
const editForm = ref({ name: '', price: 0 })
const saving = ref(false)
const successMessage = ref('')
const { isLoading, withLoading } = useLoading();

// Fetch data dari Supabase
const fetchFoods = async () => {
    await withLoading(async () => {
        try {
            const { data, error: fetchError } = await supabase
                .from('foods')
                .select('*')
                .order('id', { ascending: true })
                .limit(6)

            if (fetchError) throw fetchError

            foods.value = data
        } catch (err) {
            error.value = err.message
            console.error('Error fetching foods:', err)
        }
    })
}

// Start editing
const startEdit = (food) => {
    editingId.value = food.id
    editForm.value = { name: food.name, price: food.price }
}

// Cancel editing
const cancelEdit = () => {
    editingId.value = null
    editForm.value = { name: '', price: 0 }
}

// Save edit
const saveEdit = async (id) => {
    try {
        saving.value = true
        const { error: updateError } = await supabase
            .from('foods')
            .update({
                name: editForm.value.name,
                price: editForm.value.price
            })
            .eq('id', id)

        if (updateError) throw updateError

        // Update local data
        const index = foods.value.findIndex(f => f.id === id)
        if (index !== -1) {
            foods.value[index] = { ...foods.value[index], ...editForm.value }
        }

        successMessage.value = 'Food updated successfully!'
        setTimeout(() => successMessage.value = '', 3000)
        
        cancelEdit()
    } catch (err) {
        error.value = err.message
        console.error('Error updating food:', err)
    } finally {
        saving.value = false
    }
}

// Format price
const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID').format(price)
}

// Load data on mount
onMounted(() => {
    fetchFoods()
})
</script>