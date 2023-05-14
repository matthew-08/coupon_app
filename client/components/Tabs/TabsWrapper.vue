<template>
  <div>
    <slot />
  </div>
</template>

<script script lang="ts">
import { ref } from 'vue'
    export default {
        setup(props,{ slots }){
            const tabTitles = ref(slots)
        }
    }
</script>

<style scoped>

</style>