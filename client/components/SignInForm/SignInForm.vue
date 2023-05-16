<template>
  <form
    class="m-auto mt-5 box-border flex w-full max-w-md flex-col 
    items-center justify-center bg-white p-5 shadow-xl md:mt-7"
    @submit="attemptPost"
  >
    <h1 class="text-3xl">
      Sign-In
    </h1>
    <FormInput
      v-model="formInputs.email"
      placeholder-text="Enter Username"
      label-text="Username"
      :icon-img="appImages.userIcon"
    />
    <FormInput
      v-model="formInputs.password"
      placeholder-text="Enter Password"
      label-text="Password"
      :icon-img="appImages.lockIcon"
      :password-field="true"
    />
    <small class="mr-auto font-bold">
      Forgot your password?
      <span class="cursor-pointer text-cyan-500">Click here.</span>
    </small>
    <button
      class="bg mt-3 flex w-full justify-center border-2 border-none
       bg-cyan-300 py-3 text-2xl font-bold text-black"
      @click="attemptPost"
    >
      <template v-if="!loading">
        Login
      </template>
      <template v-else>
        <HalfCircleSpinner :size="30" />
      </template>
    </button>
    <button
      type="button"
      class="bg mt-3 flex w-full justify-center border-2 border-none
      bg-gray-300 py-3 text-2xl font-bold text-black"
      @click="fillTestCredentials"
    >
      Test Credentials
    </button>
  </form>
</template>

<script setup lang="ts">
import FormInput from './FormInput.vue';
import { ref } from 'vue';
import { appImages } from '~/utils/appImages';
import { HalfCircleSpinner } from 'epic-spinners';
import { useCustomFetch } from '~/composables/useCustomFetch';


const runtimeConfig = useRuntimeConfig();
const { makeFetch } = useCustomFetch(runtimeConfig.REST_API as string)

const loading = ref(false);

const formInputs = ref({
  email: '',
  password: '',
});

const attemptPost = async (e: Event) => {
  e.preventDefault();
  loading.value = true;
  await makeFetch('/api/sessions', 'POST', formInputs.value)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then((res) => {
      setLocalStorage(res.accessToken);
      navigateTo('/coupons');
    })
    .catch(e => {
      loading.value = false
    })
};

const fillTestCredentials = () => {
  runtimeConfig.public.TEST_EMAIL;
  formInputs.value.email = runtimeConfig.public.TEST_EMAIL as string;
  formInputs.value.password = runtimeConfig.public.TEST_PASSWORD as string;
};
</script>

<style scoped></style>
