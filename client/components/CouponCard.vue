<template>
  <div
    id="show-modal"
    class="flex flex-col items-center p-4 shadow-md border rounded-2xl 
    cursor-pointer mb-5 hover:scale-105 transition-all"
    :class="couponInfo.redeemed ? 'bg-zinc-200' : ''"
    @click="$emit('showModal', couponInfo.id)"
  >
    <div>
      <FAIcon
        :icon="['fa-brands', couponInfo.icon]"
        size="5x"
      />
    </div>
    <h2
      class="font-bold font-sans mr-auto mb-1 mt-4"
    >
      {{ couponInfo.deal }}
    </h2>
    <div
      class="flex flex-row justify-between gap-3 text-sm w-full"
    >
      <p class="text-cyan-500">
        {{ couponInfo.company }}
      </p>
      <p
        class="text-gray-500"
      >
        {{ couponInfo.validThroughStart }} - {{ couponInfo.validThroughEnd }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import type { CouponInfo } from '../globalTypes'
const props = defineProps({
    couponInfo: {
        type: Object as PropType<CouponInfo>,
        required: true,
    },
})


const emits = defineEmits(['showModal'])
</script>

<style scoped>

</style>