<template>
    <div class="min-h-screen flex flex-col items-center justify-center text-gray-950 gap-4 px-4">
        <div class="w-full max-w-7xl mx-auto text-[#3a3b38]">
            <div class="flex flex-col min-h-18 bg-border justify-center text-center items-center rounded-xl mb-6 shadow-md py-4"> 
                <p class="text-5xl font-header">Admin Dashboard<font-awesome-icon icon="fa-solid fa-champagne-glasses" class="ml-2" /></p>
            </div>
                
            
            <div class="grid grid-cols-1 gap-4">
                <div class="shadow-md"><FoodPage/></div>
                <div class="shadow-md"><DrinkPage/></div>
            </div>
        </div>
    </div>
</template>
<script setup>
import DrinkPage from './drink/DrinkPage.vue';
import FoodPage from './food/FoodPage.vue';
</script>
<style scoped>
</style>