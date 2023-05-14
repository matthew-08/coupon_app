<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section
    class="grid grid-cols-2 gap-2" 
  >
    <CouponCard @show-modal="handleCardClick" />
  </section>
  <Teleport to="body">
    <CouponModal
      :show="showModal"
      :coupon-info="{
        company: 'hello',
        expDate: '1155',
      }"
      @close="showModal = false"
    />
  </Teleport>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Teleport } from 'vue';
import { ref } from 'vue'

const showModal = ref(false)
const handleCardClick = () => {
  console.log('click')
  return showModal.value = !showModal.value  
}


</script>

<style scoped>

</style>