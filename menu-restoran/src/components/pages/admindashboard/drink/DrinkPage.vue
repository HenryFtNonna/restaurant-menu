<template>
    <div class="overflow-x-auto overflow-y-auto text-[#3a3b38]">
        <!-- Loading state -->
        <TableSkeleton v-if="isLoading" :rows="8"/>

        <!-- Error state -->
        <div v-else-if="error" class="text-center py-8 text-red-600">
            <p>Error: {{ error }}</p>
        </div>

        <!-- Table -->
        <table v-else class="table bg-[#f3f3f3]">
            <thead>
                <tr class="text-[#3a3b38]">
                    <th>No</th>
                    <th class="min-w-50">Drink Name</th>
                    <th class="min-w-35">Price</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(drink, index) in drinks" :key="drink.id">
                    <th>{{ index + 1 }}</th>
                    <td>
                        <input 
                            v-if="editingId === drink.id"
                            v-model="editForm.name"
                            type="text"
                            class="input input-sm input-bordered w-full"
                        />
                        <span v-else>{{ drink.name }}</span>
                    </td>
                    <td>
                        <input 
                            v-if="editingId === drink.id"
                            v-model="editForm.price"
                            type="number"
                            class="input input-sm input-bordered w-full"
                        />
                        <span v-else>Rp {{ formatPrice(drink.price) }}</span>
                    </td>
                    <td>
                        <div class="flex gap-2">
                            <button 
                                v-if="editingId !== drink.id"
                                @click="startEdit(drink)"
                                class="btn btn-sm bg-border hover:bg-border2 border-0"
                            >
                                Edit
                            </button>
                            <template v-else>
                                <button 
                                    @click="saveEdit(drink.id)"
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
import TableSkeleton from '../../../skeleton/TableSkeleton.vue'
import { useLoading } from '../../../../composable/useLoading'


const drinks = ref([])
const error = ref(null)
const editingId = ref(null)
const editForm = ref({ name: '', price: 0 })
const saving = ref(false)
const successMessage = ref('')
const {isLoading, withLoading} = useLoading()

// Fetch data dari Supabase
const fetchDrinks = async () => {
    await withLoading(async () => {
    try {
        const { data, error: fetchError } = await supabase
            .from('drinks')
            .select('*')
            .order('id', { ascending: true })
            .limit(6)

        if (fetchError) throw fetchError

        drinks.value = data
    } catch (err) {
        error.value = err.message
        console.error('Error fetching drinks:', err)
    } 
    })
}

// Start editing
const startEdit = (drink) => {
    editingId.value = drink.id
    editForm.value = { name: drink.name, price: drink.price }
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
            .from('drinks')
            .update({
                name: editForm.value.name,
                price: editForm.value.price
            })
            .eq('id', id)

        if (updateError) throw updateError

        // Update local data
        const index = drinks.value.findIndex(d => d.id === id)
        if (index !== -1) {
            drinks.value[index] = { ...drinks.value[index], ...editForm.value }
        }

        successMessage.value = 'Drink updated successfully!'
        setTimeout(() => successMessage.value = '', 3000)
        
        cancelEdit()
    } catch (err) {
        error.value = err.message
        console.error('Error updating drink:', err)
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
    fetchDrinks()
})
</script>

<style scoped>
</style>