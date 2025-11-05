<template>
  <div class="min-h-screen bg-white p-4 font-Poppins">
    <div class="bg-red-200 max-w-2xl mx-auto min-h-screen p-4 border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
      <!-- header/top -->
      <div class="mb-4">
        <div class="bg-amber-300 min-h-[80px] rounded-lg shadow-md p-2">
          <div class="grid grid-cols-3 gap-1 min-h-[80px] bg-amber-700 py-2">
            <div class="col-span-2 bg-amber-100 p-2">haha</div>
            <div class="col-span-1 bg-amber-900 text-white p-2">wjwjw</div>
          </div>
        </div>
      </div>

      <!-- MASTER GRID:
           mobile = 1 col,
           md+ = 10 equal columns -> use col-span to control 6/4 ratio -->
      <div class="grid grid-cols-1 md:grid-cols-10 gap-4 px-2 mb-4">
        <!-- 1. Food (left bigger: md:col-span-6) -->
        <div class="md:col-span-6 col-span-1 bg-gray-200 p-3 rounded-md drop-shadow-lg min-h-[300px]">
          <div class="bg-amber-200 p-2 rounded ">
            <div class="font-bold text-center mb-2">Food</div>
            <div class="grid grid-cols-2 gap-2">
              <div class="bg-blue-300 p-2 rounded">item</div>
              <div class="bg-blue-300 p-2 rounded">item</div>
              <div class="bg-blue-300 p-2 rounded">item</div>
              <div class="bg-blue-300 p-2 rounded">item</div>
              <div class="bg-blue-300 p-2 rounded">item</div>
              <div class="bg-blue-300 p-2 rounded">item</div>
              <div class="bg-blue-300 p-2 rounded">item</div>
              <div class="bg-blue-300 p-2 rounded">item</div>
              <div class="bg-blue-300 p-2 rounded">item</div>
              <div class="bg-blue-300 p-2 rounded">item</div>
              <div class="bg-blue-300 p-2 rounded">item</div>
              <div class="bg-blue-300 p-2 rounded">item</div>
            </div>
          </div>
        </div>

        <!-- 2. Food image (right smaller: md:col-span-4) -->
        <div class="md:col-span-4 col-span-1 bg-gray-100 p-3 rounded-md flex items-center justify-center min-h-[100px]">
          <!-- contoh image, ganti src nanti -->
          <div class="w-full h-40 md:h-82 rounded-md overflow-hidden shadow-sm">
            <img src="https://picsum.photos/seed/food/800/600" alt="food" class="w-full h-full object-cover" />
          </div>
        </div>

        <!-- 3. Drink (left bigger: md:col-span-6) -->
        <div class="md:col-span-6 col-span-1 bg-gray-200 p-3 rounded-md drop-shadow-lg min-h-[300px]">
          <div class="bg-amber-200 p-2 rounded">
            <div class="font-bold text-center mb-2">Drink</div>
            <div class="grid grid-cols-2 gap-2">
              <div class="bg-blue-300 p-2 rounded">item</div>
              <div class="bg-blue-300 p-2 rounded">item</div>
              <div class="bg-blue-300 p-2 rounded">item</div>
              <div class="bg-blue-300 p-2 rounded">item</div>
              <div class="bg-blue-300 p-2 rounded">item</div>
              <div class="bg-blue-300 p-2 rounded">item</div>
              <div class="bg-blue-300 p-2 rounded">item</div>
              <div class="bg-blue-300 p-2 rounded">item</div>
              <div class="bg-blue-300 p-2 rounded">item</div>
              <div class="bg-blue-300 p-2 rounded">item</div>
              <div class="bg-blue-300 p-2 rounded">item</div>
              <div class="bg-blue-300 p-2 rounded">item</div>

            </div>
          </div>
        </div>

        <!-- 4. Drink image (right smaller: md:col-span-4) -->
        <div class="md:col-span-4 col-span-1 bg-gray-100 p-3 rounded-md flex items-center justify-center">
          <div class="w-full h-40 md:h-82 rounded-md overflow-hidden shadow-sm">
            <img src="https://images.pexels.com/photos/302904/pexels-photo-302904.jpeg" alt="drink" class="h-full w-full object-cover" />
          </div>
        </div>
      </div>

      <!-- footer -->
      <div class="grid grid-cols-1 py-1 px-2">
        <div class="bg-amber-300 min-h-[50px] rounded-lg shadow-md text-center flex justify-center items-center">01</div>
      </div>
    </div>
  </div>
</template>

<script setup>
// layout-only, nggak perlu script untuk demo ini
</script>

<style>
/* optional: jika mau max-w lebih besar ganti max-w-2xl di parent */
</style>
