<template>
  <div class="min-h-screen bg-[#d1d1c6] p-4">
    <div class="bg-[#edede0] max-w-2xl mx-auto min-h-screen p-4 border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
      <HomePage/>
      <!-- <LoginPage/> -->
      <!-- <IndexDashboard/> -->
    </div>
  </div>
</template>

<script setup>
import HomePage from './homepage/HomePage.vue';
import LoginPage from './loginpage/LoginPage.vue';
import IndexDashboard from './admindashboard/IndexDashboard.vue'
</script>

<style>

</style>
