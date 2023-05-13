<template>
    <form
    class="flex flex-col p-5 justify-center items-center shadow-md max-w-md m-auto"
    >
        <h1
        class="text-3xl"
        >Sign-In</h1>
        <FormInput
            placeholder-text="Enter Username"
            label-text="Username"
            :icon-img="appImages.userIcon"   
            v-model="formInputs.email"
        />
        <FormInput
            placeholder-text="Enter Password"
            label-text="Password"
            v-model="formInputs.password"
            :icon-img="appImages.lockIcon"   
        />
        <small
        class="mr-auto font-bold"
        >Forgot your password?
        <span
        class="text-cyan-500 cursor-pointer"
        >Click here.</span></small>
        <button
        class="w-full border-2 mt-3 py-2 text-2xl font-bold bg text-black bg-cyan-200 border-none"
        >
            Log In
        </button>
    </form>
</template>

<script setup lang="ts">
import FormInput from './FormInput.vue';
import { ref } from 'vue';
import { appImages } from '~/utils/appImages';

const formInputs = ref({
    email: '',
    password: '',
})


</script>

<style scoped>

</style>