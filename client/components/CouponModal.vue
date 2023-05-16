<template>
  <Transition name="modal">
    <div
      v-if="show"
      class="modal-overlay"
    >
      <div
        class="modal-container relative flex w-80 flex-col 
        items-center sm:w-6/12 sm:max-w-md"
      >
        <div
          class="absolute right-3 top-3 cursor-pointer"
          @click="$emit('close')"
        >
          <FAIcon
            :icon="['fa-solid', 'fa-x']"
            size="1x"
          />
        </div>
        <div class="modal-header mt-5">
          <h1 class="text-2xl font-bold">
            Coupon Redemption
          </h1>
        </div>
        <div class="modal-body flex flex-col items-center gap-3">
          <FAIcon
            :icon="['fa-brands', couponInfo.icon]"
            size="5x"
          />
          <h1 class="text-2xl font-bold">
            {{ couponInfo.company }}
          </h1>
          <h1 class="text-center text-lg font-bold">
            {{ couponInfo.deal }}
            <br>
            {{ couponInfo.validThroughStart }} -
            {{ couponInfo.validThroughEnd }}
          </h1>
          <div>
            <h2 class="text-1xl mr-auto font-bold">
              Description:
            </h2>
            <p class="text-left">
              Lorem ipsum dolor, sit amet dir adipisicing elit. Officiis, eos.
              Earum magnam dolores porro maxime atque corrupti, tempora quaerat.
            </p>
          </div>
        </div>

        <div class="modal-footer flex w-full flex-col items-center">
          <div
            v-show="couponInfo.redeemed"
            class="mb-2 text-center"
          >
            <p>Your code is:</p>
            <p class="text-3xl">
              {{ couponInfo.code }}
            </p>
          </div>
          <button
            class="mb-2 w-full bg-slate-200 p-2"
            :disabled="couponInfo.redeemed"
            @click="$emit('redeemCoupon', couponInfo.id)"
          >
            <template v-if="!loadingRedeem">
              {{
                couponInfo.redeemed
                  ? `Redeemed on ${couponInfo.redeemedAt}`
                  : 'Redeem now!'
              }}
            </template>
            <template v-else>
              <HalfCircleSpinner
                class="m-auto"
                :size="30"
              />
            </template>
          </button>
          <button
            class="w-full bg-slate-500 p-2 text-white"
            @click="$emit('close')"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { HalfCircleSpinner } from 'epic-spinners';
import { CouponInfo } from '~/globalTypes';
const emits = defineEmits(['close', 'redeemCoupon']);

const props = defineProps({
  show: Boolean,
  couponInfo: {
    type: Object as PropType<CouponInfo>,
    required: true,
  },
  loadingRedeem: Boolean,
});

</script>

<style>
.modal-overlay {
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 999;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.43);
  transition: opacity 0.3s ease-in-out;
}

.modal-container {
  margin: auto;
  padding: 25px 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 8px rgba(0, 0, 0, 0.41);
  transition: all 0.2s ease-in-out;
}

.modal-body {
  margin: 10px 0;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: translateY(100%);
}
</style>
