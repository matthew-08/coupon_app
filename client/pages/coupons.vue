<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section
    class="grid grid-cols-2 gap-2" 
  >
    <div
      class="flex flex-col items-center p-4 shadow-lg border rounded-2xl"
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
    <div
      class="flex flex-col items-center p-4 shadow-lg border rounded-2xl"
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
        <p>5/3 - 5/5</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


</script>

<style scoped>

</style>