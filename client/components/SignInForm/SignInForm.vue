<template>
  <form
    class="flex flex-col p-5 justify-center 
    items-center box-border  bg-white
    w-full shadow-xl max-w-md m-auto mt-5 md:mt-7"
    @submit="attemptPost"
  >
    <h1
      class="text-3xl"
    >
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
    <small
      class="mr-auto font-bold"
    >Forgot your password?
      <span
        class="text-cyan-500 cursor-pointer"
      >Click here.</span></small>
    <button
      class="flex justify-center w-full border-2 mt-3 py-3 text-2xl 
      font-bold bg text-black bg-cyan-300 border-none"
      @click="attemptPost"
    >
      <template 
        v-if="!loading"
      >
        Login
      </template>
      <template
        v-else
      >
        <HalfCircleSpinner
          :size="30"
        />
      </template>
    </button>
    <button
      type="button" 
      class="flex justify-center w-full border-2 mt-3 py-3 text-2xl 
      font-bold bg text-black bg-gray-300 border-none"
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
import api from '~/utils/apiFetch'
import { HalfCircleSpinner } from 'epic-spinners'

const runtimeConfig = useRuntimeConfig()


const loading = ref(false)

const formInputs = ref({
    email: '',
    password: '',
})

const attemptPost = async (e:Event) => {
    e.preventDefault()
    loading.value = true
    await api.makeFetch('/api/sessions', 'POST', formInputs.value)
    .then((res) => {
      if(res.status === 200) {
        return res.json()
      }
    })
    .then((res) => {
      setLocalStorage(res.accessToken)
      navigateTo('/coupons')
    })
}

const fillTestCredentials = () => {
    runtimeConfig.public.TEST_EMAIL
    formInputs.value.email = runtimeConfig.public.TEST_EMAIL as string
    formInputs.value.password = runtimeConfig.public.TEST_PASSWORD as string
}

</script>

<style scoped>

</style>