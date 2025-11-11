<template>
    <div class="w-full">
        <div class="skeleton h-12 w-full mb-4"></div>
        <div v-for="i in rows" :key="i" class="skeleton h-16 w-full mb-2"></div>
    </div>
</template>

<script setup>
defineProps({
    rows: {
        type: Number,
        default: 5
    }
});
</script>