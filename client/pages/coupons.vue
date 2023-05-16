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
      :loading-redeem="loadingRedeem"
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
import api from '~/utils/apiFetch';
import { formatCoupons } from '~/utils/formatCoupons';

definePageMeta({
  middleware: 'protect-route',
});

const couponsLoading = ref(true);
const showModal = ref(false);
const modalCoupon = ref<CouponInfo>({} as CouponInfo);


const coupons = ref<CouponInfo[]>([]);
const loadingRedeem = ref(false);
const loadingCards = ref(Array(10));

if (process.client) {
  couponsLoading.value = true;
  await api
    .makeFetch('/api/coupons')
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
  loadingRedeem.value = true;
  await api
    .makeFetch(`/api/coupons/${coupId}`, 'PUT')
    .then((res) => res.json())
    .then((r: { code: string; redeemedAt: string }) => {
      redeemedCoupon.code = r.code;
      redeemedCoupon.redeemedAt = r.redeemedAt;
    });
  loadingRedeem.value = false;
  redeemedCoupon.redeemed = true;
  console.log(redeemedCoupon);
};
</script>
