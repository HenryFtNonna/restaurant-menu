<template>
  <div class="min-h-screen">
    <!-- Wrapper untuk memusatkan semua konten -->
    <div class="w-full max-w-7xl mx-auto px-1">
      
      <!-- header/top -->
      <div class="mb-2 mt-2">
        <div class="bg-[#d8dcc1] min-h-20 rounded-lg shadow-md p-2">
          <div class="grid grid-cols-1 gap-1 min-h-20 bg-border py-2 px-2">
            <div class="col-span-1 bg-[#f3f3f3] p-2 justify-center text-center items-center flex font-bold text-[#3a3b38] text-[35px] font-header">
              TepiLangit Resto
              <font-awesome-icon icon="fa-solid fa-champagne-glasses" class="ml-2" />
            </div>
          </div>
        </div>
      </div>

      <!-- MASTER GRID -->
      <div class="grid grid-cols-1 md:grid-cols-10 gap-4 mb-4">
        <!-- 1. Food -->
        <div class="md:col-span-6 col-span-1 bg-[#d8dcc1] p-2 rounded-sm drop-shadow-sm min-h-[300px] text-[#3a3b38] font-footer">
          <div class="bg-border p-2 rounded px-4 py-4">
            <div class="font-bold text-center mb-2 text-[20px]">Food</div>
            
            <CardSkeleton v-if="isLoading" :rows="8"/>
            
            <div v-else-if="foodsError" class="text-center py-4 text-red-600">
              <p>{{ foodsError }}</p>
            </div>
            
            <div v-else class="grid grid-cols-2 gap-2">
              <div v-for="food in foods" :key="food.id" class="contents">
                <div class="bg-[#f3f3f3] p-2 rounded">{{ food.name }}</div>
                <div class="bg-[#f3f3f3] p-2 rounded text-center">Rp {{ formatPrice(food.price) }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 2. Food image -->
        <div class="md:col-span-4 col-span-1 bg-border rounded-sm flex items-center drop-shadow-sm justify-center min-h-[100px]">
          <div class="w-full h-40 md:h-91 rounded-md overflow-hidden shadow-sm">
            <img src="https://images.pexels.com/photos/20488283/pexels-photo-20488283.jpeg" alt="food" class="w-full h-full object-cover" />
          </div>
        </div>

        <!-- 3. Drink -->
        <div class="md:col-span-6 col-span-1 bg-[#d8dcc1] p-2 rounded-sm drop-shadow-sm min-h-[300px] font-footer">
          <div class="bg-border p-2 rounded px-4 py-4">
            <div class="font-bold text-center mb-2 text-[20px]">Drink</div>
            
            <CardSkeleton v-if="isLoading" :rows="8"/>
            
            <div v-else-if="drinksError" class="text-center py-4 text-red-600">
              <p>{{ drinksError }}</p>
            </div>
            
            <div v-else class="grid grid-cols-2 gap-2">
              <div v-for="drink in drinks" :key="drink.id" class="contents">
                <div class="bg-[#f3f3f3] p-2 rounded">{{ drink.name }}</div>
                <div class="bg-[#f3f3f3] p-2 rounded text-center">Rp {{ formatPrice(drink.price) }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 4. Drink image -->
        <div class="md:col-span-4 col-span-1 bg-border rounded-sm flex items-center drop-shadow-sm justify-center">
          <div class="w-full h-40 md:h-91 rounded-md overflow-hidden shadow-sm">
            <img src="https://images.pexels.com/photos/7270275/pexels-photo-7270275.jpeg" alt="drink" class="h-full w-full object-cover" />
          </div>
        </div>
      </div>

      <!-- footer -->
      <div class="grid grid-cols-1 py-1 rounded-sm text-center mb-2">
        <div class="grid grid-cols-1 bg-[#f3f3f3] font-footer text-[#5a5e55] text-[13px] py-2">
          TepiLangit Resto © 2025 Mohan Henry Kusuma All rights reserved.
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../../../lib/supabase'
import CardSkeleton from '../../skeleton/CardSkeleton.vue'
import { useLoading } from '../../../composable/useLoading'

const foods = ref([])
const {isLoading, withLoading} = useLoading()
const foodsError = ref(null)

const drinks = ref([])
const drinksError = ref(null)

const fetchFoods = async () => {
  await withLoading(async () => {
    try {
      const { data, error } = await supabase
        .from('foods')
        .select('*')
        .order('id', { ascending: true })
        .limit(6)

      if (error) throw error

      foods.value = data
    } catch (err) {
      foodsError.value = 'Failed to load foods'
      console.error('Error fetching foods:', err)
    }
  })
}

const fetchDrinks = async () => {
  await withLoading(async () => {
    try {
      const { data, error } = await supabase
        .from('drinks')
        .select('*')
        .order('id', { ascending: true })
        .limit(6)

      if (error) throw error

      drinks.value = data
    } catch (err) {
      drinksError.value = 'Failed to load drinks'
      console.error('Error fetching drinks:', err)
    } 
  })
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID').format(price)
}

onMounted(() => {
  fetchFoods()
  fetchDrinks()
})
</script>