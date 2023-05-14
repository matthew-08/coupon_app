<template>
  <Transition name="modal">
    <div
      v-if="show"
      class="modal-overlay"
    >
      <div class="modal-container relative flex flex-col items-center">
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
          <h1 class="font-bold text-2xl">
            Coupon Redemption
          </h1>
        </div>
        <div class="modal-body flex flex-col items-center gap-3">
          <FAIcon
            :icon="couponInfo.icon"
            size="5x"
          />
          <h1 class="text-2xl font-bold">
            {{ couponInfo.company }}
          </h1>
          <h1 class="font-bold text-lg text-center">
            {{ couponInfo.deal }}
            <br>
            {{ couponInfo.validThroughStart }} - {{ couponInfo.validThroughEnd }}
          </h1>
          <div>
            <h2 class="mr-auto text-1xl font-bold">
              Description:
            </h2>
            <p class="text-left">
              Lorem ipsum dolor, sit amet dir adipisicing elit. Officiis, eos. Earum magnam dolores porro maxime atque corrupti, tempora quaerat.
            </p>
          </div>
        </div>

        <div class="flex flex-col modal-footer w-full items-center">
          <div
            v-show="redeemedCoupon"
            class="text-center mb-2"
          >
            <p>Your code is:</p>
            <p class="text-3xl">
              {{ genCouponCode() }}
            </p>
          </div>
          <button
            class="w-full bg-slate-200 p-2 mb-2"
          >
            Redeem Now!
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
import { genCouponCode } from '~/utils/genCoupCode';
import { CouponInfo } from '~/globalTypes';
const emits = defineEmits(['close'])
const redeemedCoupon = ref(false)


const props = defineProps({
  show: Boolean,
  couponInfo: {
    type: Object as PropType<CouponInfo>,
    required: true,
  }
})
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
  width: 320px;
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