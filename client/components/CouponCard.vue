<template>
  <div
    id="show-modal"
    class="flex flex-col items-center p-4 shadow-lg border rounded-2xl"
    @click="$emit('showModal')"
  >
    <FontAwesomeIcon
      :icon="['fa-brands', 'playstation']"
      size="5x"
    />
    <h2
      class="font-bold font-sans mr-auto mb-1 mt-4"
    >
      25% Off
    </h2>
    <div
      class="flex justify-between gap-3 text-sm"
    >
      <p class="text-cyan-500">
        Playstation
      </p>
      <p
        class="text-gray-500"
      >
        5/3 - 5/5
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const emits = defineEmits(['showModal'])
</script>

<style scoped>

</style>