<template>
  <div class="min-h-screen bg-[#d1d1c6] p-3">
    <div class="bg-[#edede0] max-w-2xl mx-auto min-h-screen p-4 border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
    <PageSkeleton v-if="isPageLoading" />
    <router-view v-else />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import PageSkeleton from '../skeleton/PageSkeleton.vue'

const router = useRouter()
const isPageLoading = ref(false)

// Tampilkan skeleton saat route berubah
router.beforeEach((to, from, next) => {
  isPageLoading.value = true
  next()
})

router.afterEach(() => {
  // Delay sedikit agar smooth
  setTimeout(() => {
    isPageLoading.value = false
  }, 300)
})
</script>

<style>
</style>