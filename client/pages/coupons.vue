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
import { definePageMeta } from '~/.nuxt/imports';

definePageMeta({
  middleware: 'protect-route'
})
const coupons = ref<CouponInfo[]>([])

if(process.client) {
  await fetch('http://localhost:3000/api/coupons', {
    headers: {
      authorization: `Bearer ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(r => coupons.value = r)
}



const modalCoupon = ref<CouponInfo>({} as CouponInfo)



const showModal = ref(false)
const findCoupon = (id: number) => coupons.value.find((coupon) => coupon.id === id)
const setModalCard = (coupId: number) => {
  const selectedCoupon = findCoupon(coupId)
  if(selectedCoupon) {
    modalCoupon.value = selectedCoupon
  }
}
const handleCardClick = (couponId: number) => {
  setModalCard(couponId)
  return showModal.value = !showModal.value  
}

const handleRedeemCoupon = (coupId: number) => {
  const redeemedCoupon = findCoupon(coupId)
  if(redeemedCoupon) {
    redeemedCoupon.redeemed = true
    console.log(redeemedCoupon)
  }
}




</script>

<style scoped>

</style>