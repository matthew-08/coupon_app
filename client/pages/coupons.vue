<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section
    class="mx-auto grid max-w-screen-xl grid-cols-2 
    gap-2 px-2 sm:grid-cols-3 md:grid-cols-4"
  >
    <LoadingCard
      v-for="(loadingCard, index) in loadingCards"
      v-show="couponsLoading"
      :key="index"
    />
    <CouponCard
      v-for="coupon in coupons"
      v-show="!couponsLoading"
      :key="coupon.id"
      :coupon-info="coupon"
      @show-modal="handleCardClick"
    />
  </section>
  <Teleport to="body">
    <CouponModal
      :show="showModal"
      :coupon-info="modalCoupon"
      :loading-redeem="redeemLoading"
      @close="showModal = false"
      @redeem-coupon="handleRedeemCoupon"
    />
  </Teleport>
</template>

<script setup lang="ts">
import { Teleport } from 'vue';
import { ref } from 'vue';
import { CouponInfo } from '~/globalTypes';
import { definePageMeta } from '~/.nuxt/imports';
import { formatCoupons } from '~/utils/formatCoupons';
import type { RedemptionInfo } from '~/globalTypes'
import { useCustomFetch } from '~/composables/useCustomFetch'


const config = useRuntimeConfig()

const { makeFetch } = useCustomFetch(config.public.REST_API)

definePageMeta({
  middleware: 'protect-route',
});

const couponsLoading = ref(true);
const coupons = ref<CouponInfo[]>([]);


const showModal = ref(false);
const modalCoupon = ref<CouponInfo>({} as CouponInfo);

const redeemLoading = ref(false);
const loadingCards = ref(Array(10));

if (process.client) {
  couponsLoading.value = true;
  await makeFetch('/api/coupons')
    .then((res) => res.json())
    .then((r: CouponInfo[]) => {
      coupons.value = formatCoupons(r)
      couponsLoading.value = false;
    });
}

const findCoupon = (id: number) =>
  coupons.value.find((coupon) => coupon.id === id);


const setModalCard = (coupId: number) => {
  const selectedCoupon = findCoupon(coupId);
  if (selectedCoupon) {
    modalCoupon.value = selectedCoupon;
  }
};

const handleCardClick = (couponId: number) => {
  setModalCard(couponId);
  return (showModal.value = !showModal.value);
};

const handleRedeemCoupon = async (coupId: number) => {
  const redeemedCoupon = findCoupon(coupId);
  if (!redeemedCoupon) {
    return;
  }
  redeemLoading.value = true;
  await makeFetch(`/api/coupons/${coupId}`, 'PUT')
    .then((res) => res.json())
    .then((r: RedemptionInfo) => {
      // Create new object with redemption info
      const formattedCoupon = formatCoupons(redeemedCoupon, r)
      // Re-render modal coupon with updated data.
      modalCoupon.value = formattedCoupon
      // Re-render coupons list with updated data.
      coupons.value = coupons.value.map(c => {
        if(c.id === redeemedCoupon.id) {
          return formattedCoupon
        }
        return c
      })
 
    });
  redeemLoading.value = false;
};
</script>
