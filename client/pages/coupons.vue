<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section
    class="max-w-screen-xl grid gap-2 grid-cols-2 sm:grid-cols-3 
    md:grid-cols-4 px-2 mx-auto" 
  >
    <LoadingCard
      v-for="(loadingCard, index) in loadingCards"
      v-show="loading"
      :key="index"
    />
    <CouponCard
      v-for="(coupon) in coupons"
      v-show="!loading" 
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
import { convertDate } from '~/utils/convertDate'
import api from '~/utils/apiFetch';

const loading = ref(true)

definePageMeta({
  middleware: 'protect-route'
})
const coupons = ref<CouponInfo[]>([])
const loadingCards = ref(Array(10))

if(process.client) {
  loading.value = true
  await api.makeFetch('/api/coupons')
  .then(res => res.json())
  .then((r: CouponInfo[]) => {
    coupons.value = r.map(r => {
    r.validThroughStart = '5/01'
    r.validThroughEnd = convertDate(r.validThroughEnd)
    return r
  })
  loading.value = false
})
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
