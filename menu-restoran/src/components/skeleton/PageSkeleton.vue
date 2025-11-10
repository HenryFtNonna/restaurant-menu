<template>
    <div class="space-y-4">
        <div class="skeleton h-12 w-64"></div>
        <div class="skeleton h-8 w-full"></div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CardSkeleton v-for="i in cards" :key="i" />
        </div>
    </div>
</template>

<script setup>
defineProps({
    cards: {
        type: Number,
        default: 6
    }
});
</script>