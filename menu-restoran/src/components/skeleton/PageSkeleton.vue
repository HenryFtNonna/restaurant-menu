<template>
    <div class="space-y-4 p-4">
        <div class="skeleton h-12 w-64 bg-gray-200 rounded animate-pulse"></div>
        <div class="skeleton h-8 w-full bg-gray-200 rounded animate-pulse"></div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="i in cards" :key="i" class="skeleton h-40 bg-gray-200 rounded animate-pulse"></div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    cards: {
        type: Number,
        default: 6
    }
})
</script>