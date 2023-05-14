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
      :coupon-info="modalCoupon"
      @close="showModal = false"
      @redeem-coupon="handleRedeemCoupon"
    />
  </Teleport>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Teleport } from 'vue';
import { ref } from 'vue'
import { CouponInfo } from '~/globalTypes';

const modalCoupon = ref<CouponInfo>({} as CouponInfo)

const coupons = ref<CouponInfo[]>([{
  deal: '10% Cashback',
  id: 1,
  company: 'Playstation',
  validThroughStart: '5/3',
  validThroughEnd: '5/5',
  icon: ['fa-brands', 'playstation'],
  redeemed: false,
}, {
  deal: '5% Off',
  id: 3,
  company: 'Dropbox',
  validThroughStart: '5/3',
  validThroughEnd: '5/5',
  icon: ['fa-brands', 'dropbox'],
  redeemed: false,
}, {
  deal: '15% Off',
  id: 4,
  company: 'Steam',
  validThroughStart: '5/3',
  validThroughEnd: '5/5',
  icon: ['fa-brands', 'steam'],
  redeemed: false,

}, {
  deal: '15% Off',
  id: 5,
  company: 'Google',
  validThroughStart: '5/3',
  validThroughEnd: '5/5',
  icon: ['fa-brands', 'google-wallet'],
  redeemed: false,

}, {
  deal: '15% Off',
  id: 6,
  company: 'Apple Wallet',
  validThroughStart: '5/3',
  validThroughEnd: '5/5',
  icon: ['fa-brands', 'apple-pay'],
  redeemed: false,

}, {
  deal: '15% Off',
  id: 7,
  company: 'Battle.net',
  validThroughStart: '5/3',
  validThroughEnd: '5/5',
  icon: ['fa-brands', 'battle-net'],
  redeemed: false,

}, {
  deal: '15% Off',
  id: 8,
  company: 'Itunes',
  validThroughStart: '5/3',
  validThroughEnd: '5/5',
  icon: ['fa-brands', 'itunes'],
  redeemed: false,

}, {
  deal: '15% Off',
  id: 9,
  company: 'Ebay  ',
  validThroughStart: '5/3',
  validThroughEnd: '5/5',
  icon: ['fa-brands', 'ebay'],
  redeemed: false,
}, {
  deal: '15% Off',
  id: 10,
  company: 'Amazon Pay',
  validThroughStart: '5/3',
  validThroughEnd: '5/5',
  icon: ['fa-brands', 'amazon-pay'],
  redeemed: false,
}, {
  deal: '15% Off',
  id: 11,
  company: 'Audible',
  validThroughStart: '5/3',
  validThroughEnd: '5/5',
  icon: ['fa-brands', 'audible'],
  redeemed: false,
},])

const showModal = ref(false)
const setModalCard = (id: number) => {
  const selectedCoupon = coupons.value.find((coupon) => coupon.id === id)
  if(selectedCoupon) {
    modalCoupon.value = selectedCoupon
  }
}
const handleCardClick = (couponId: number) => {
  setModalCard(couponId)
  return showModal.value = !showModal.value  
}

const handleRedeemCoupon = (couponId: number) => {
  const selectedCoupon = coupons.value.find((coupon) => coupon.id === couponId)
  if(selectedCoupon) {
    selectedCoupon.redeemed = true
    console.log(selectedCoupon)
  }
}


</script>

<style scoped>

</style>