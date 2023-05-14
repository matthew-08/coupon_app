<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section
    class="grid sm: grid-cols-2 gap-2" 
  >
    <CouponCard
      v-for="(coupon) in coupons" 
      :key="coupon.id"
      :coupon-info="coupon"
      @show-modal="handleCardClick"
    />
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
import { CouponInfo } from '~/globalTypes';

const coupons = ref<CouponInfo[]>([{
  deal: '10% Cashback',
  id: 1,
  company: 'Playstation',
  validThroughStart: '5/3',
  validThroughEnd: '5/5',
  icon: ['fa-brands', 'playstation']
}, {
  deal: '5% Off',
  id: 2,
  company: 'Dropbox',
  validThroughStart: '5/3',
  validThroughEnd: '5/5',
  icon: ['fa-brands', 'dropbox']
}, {
  deal: '5% Off',
  id: 2,
  company: 'Dropbox',
  validThroughStart: '5/3',
  validThroughEnd: '5/5',
  icon: ['fa-brands', 'dropbox']
}, {
  deal: '15% Off',
  id: 2,
  company: 'Steam',
  validThroughStart: '5/3',
  validThroughEnd: '5/5',
  icon: ['fa-brands', 'steam']
}, {
  deal: '15% Off',
  id: 2,
  company: 'Google Wallet',
  validThroughStart: '5/3',
  validThroughEnd: '5/5',
  icon: ['fa-brands', 'google-wallet']
}, {
  deal: '15% Off',
  id: 2,
  company: 'Google Wallet',
  validThroughStart: '5/3',
  validThroughEnd: '5/5',
  icon: ['fa-brands', 'apple-pay']
}, {
  deal: '15% Off',
  id: 2,
  company: 'Google Wallet',
  validThroughStart: '5/3',
  validThroughEnd: '5/5',
  icon: ['fa-brands', 'battle-net']
}, {
  deal: '15% Off',
  id: 2,
  company: 'Google Wallet',
  validThroughStart: '5/3',
  validThroughEnd: '5/5',
  icon: ['fa-brands', 'itunes']
}, {
  deal: '15% Off',
  id: 2,
  company: 'Google Wallet',
  validThroughStart: '5/3',
  validThroughEnd: '5/5',
  icon: ['fa-brands', 'ebay']
}, {
  deal: '15% Off',
  id: 2,
  company: 'Google Wallet',
  validThroughStart: '5/3',
  validThroughEnd: '5/5',
  icon: ['fa-brands', 'amazon-pay']
}, {
  deal: '15% Off',
  id: 2,
  company: 'Google Wallet',
  validThroughStart: '5/3',
  validThroughEnd: '5/5',
  icon: ['fa-brands', 'audible']
},])

const showModal = ref(false)
const handleCardClick = () => {
  console.log('click')
  return showModal.value = !showModal.value  
}


</script>

<style scoped>

</style>