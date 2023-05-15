<template>
  <div
    class="loader flex flex-col items-center justify-center 
    shadow-md border rounded-2xl cursor-pointer mb-5 
    hover:scale-105 transition-all min-w-full"
  >
    <HalfCircleSpinner
      :size="100"
      color="#26c6da"
    />
    <h1 class="mt-4">
      Loading Coupon...
    </h1>
  </div>
</template>


<script setup lang="ts">
    import { HalfCircleSpinner } from 'epic-spinners';
</script>

<style scoped>
.loader {
    min-width: 189px;
    min-height: 178px;
}
</style>
