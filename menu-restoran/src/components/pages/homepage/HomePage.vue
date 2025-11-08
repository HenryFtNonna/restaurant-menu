<template>
  <div>
          <!-- header/top -->
      <div class="mb-4 ">
        <div class="bg-[#d8dcc1] min-h-20 rounded-lg shadow-md p-2">
          <div class="grid grid-cols-1 gap-1 min-h-20 bg-border py-2 px-2">
            <div class="col-span-1 bg-[#f3f3f3] p-2 justify-center text-center items-center flex font-bold text-[#3a3b38] text-[35px] font-header">
              TepiLangit Resto
              <font-awesome-icon icon="fa-solid fa-champagne-glasses" class="ml-2" />
            </div>
            <!-- <div class="col-span-1 bg-amber-900 text-white p-2 justify-center text-center items-center flex"></div> -->
          </div>
        </div>
      </div>

      <!-- MASTER GRID:
           mobile = 1 col,
           md+ = 10 equal columns -> use col-span to control 6/4 ratio -->
      <div class="grid grid-cols-1 md:grid-cols-10 gap-4 px-2 mb-4">
        <!-- 1. Food (left bigger: md:col-span-6) -->
        <div class="md:col-span-6 col-span-1 bg-[#d8dcc1] p-2 rounded-sm drop-shadow-sm min-h-[300px] text-[#3a3b38] font-footer">
          <div class="bg-border p-2 rounded px-4 py-4">
            <div class="font-bold text-center mb-2 text-[20px]">Food</div>
            <div class="grid grid-cols-2 gap-2">
              <div class="bg-[#f3f3f3] p-2 rounded">item</div>
              <div class="bg-[#f3f3f3] p-2 rounded text-center">item</div>
              <div class="bg-[#f3f3f3] p-2 rounded">item</div>
              <div class="bg-[#f3f3f3] p-2 rounded text-center">item</div>
              <div class="bg-[#f3f3f3] p-2 rounded">item</div>
              <div class="bg-[#f3f3f3] p-2 rounded text-center">item</div>
              <div class="bg-[#f3f3f3] p-2 rounded">item</div>
              <div class="bg-[#f3f3f3] p-2 rounded text-center">item</div>
              <div class="bg-[#f3f3f3] p-2 rounded">item</div>
              <div class="bg-[#f3f3f3] p-2 rounded text-center">item</div>
              <div class="bg-[#f3f3f3] p-2 rounded">item</div>
              <div class="bg-[#f3f3f3] p-2 rounded text-center">item</div>
            </div>
          </div>
        </div>

        <!-- 2. Food image (right smaller: md:col-span-4) -->
        <div class="md:col-span-4 col-span-1 bg-border rounded-sm flex items-center drop-shadow-sm justify-center min-h-[100px]">
          <!-- contoh image, ganti src nanti -->
          <div class="w-full h-40 md:h-91 rounded-md overflow-hidden shadow-sm">
            <img src="https://images.pexels.com/photos/20488283/pexels-photo-20488283.jpeg" alt="food" class="w-full h-full object-cover" />
          </div>
        </div>

        <!-- 3. Drink (left bigger: md:col-span-6) -->
        <div class="md:col-span-6 col-span-1 bg-[#d8dcc1] p-2 rounded-sm drop-shadow-sm min-h-[300px] font-footer">
          <div class="bg-border p-2 rounded px-4 py-4">
            <div class="font-bold text-center mb-2 text-[20px]">Drink</div>
            <div class="grid grid-cols-2 gap-2">
              <div class="bg-[#f3f3f3] p-2 rounded">item</div>
              <div class="bg-[#f3f3f3] p-2 rounded text-center">item</div>
              <div class="bg-[#f3f3f3] p-2 rounded ">item</div>
              <div class="bg-[#f3f3f3] p-2 rounded text-center">item</div>
              <div class="bg-[#f3f3f3] p-2 rounded">item</div>
              <div class="bg-[#f3f3f3] p-2 rounded text-center">item</div>
              <div class="bg-[#f3f3f3] p-2 rounded">item</div>
              <div class="bg-[#f3f3f3] p-2 rounded text-center">item</div>
              <div class="bg-[#f3f3f3] p-2 rounded">item</div>
              <div class="bg-[#f3f3f3] p-2 rounded text-center">item</div>
              <div class="bg-[#f3f3f3] p-2 rounded">item</div>
              <div class="bg-[#f3f3f3] p-2 rounded text-center">item</div>
            </div>
          </div>
        </div>

        <!-- 4. Drink image (right smaller: md:col-span-4) -->
        <div class="md:col-span-4 col-span-1 bg-border rounded-sm flex items-center drop-shadow-sm justify-center">
          <div class="w-full h-40 md:h-91 rounded-md overflow-hidden shadow-sm">
            <img src="https://images.pexels.com/photos/7270275/pexels-photo-7270275.jpeg" alt="drink" class="h-full w-full object-cover" />
          </div>
        </div>
      </div>

      <!-- footer -->
      <div class="grid grid-cols-1 py-1 px-1 bg-border rounded-sm text-center">
        <div class="grid grid-cols-1 bg-[#f3f3f3] font-footer text-[#5a5e55] text-[13px]">
          TepiLangit Resto © 2025 Mohan Henry Kusuma All rights reserved.
          </div>
      </div>
  </div>
  

</template>

<script>
  // import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons'

  // library.add(faChampagneGlasses)

</script>

<style>

</style>