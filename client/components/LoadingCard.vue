<template>
  <div
    class="loader mb-5 flex min-w-full cursor-pointer flex-col 
    items-center justify-center rounded-2xl border shadow-md 
    transition-all hover:scale-105"
  >
    <HalfCircleSpinner :size="100" color="#26c6da" />
    <h1 class="mt-4">Loading Coupon...</h1>
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
