<template>
  <div
    id="show-modal"
    class="mb-5 flex cursor-pointer flex-col items-center 
    rounded-2xl border p-4 shadow-md transition-all 
    hover:scale-105"
    :class="couponInfo.redeemed ? 'bg-zinc-200' : ''"
    @click="$emit('showModal', couponInfo.id)"
  >
    <div>
      <FAIcon :icon="['fa-brands', couponInfo.icon]" size="5x" />
    </div>
    <h2 class="mb-1 mr-auto mt-4 font-sans font-bold">
      {{ couponInfo.deal }}
    </h2>
    <div class="flex w-full flex-row justify-between gap-3 text-sm">
      <p class="text-cyan-500">
        {{ couponInfo.company }}
      </p>
      <p class="text-gray-500">
        {{ couponInfo.validThroughStart }} - {{ couponInfo.validThroughEnd }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CouponInfo } from '../globalTypes';
const props = defineProps({
  couponInfo: {
    type: Object as PropType<CouponInfo>,
    required: true,
  },
});

const emits = defineEmits(['showModal']);
</script>

<style scoped></style>
