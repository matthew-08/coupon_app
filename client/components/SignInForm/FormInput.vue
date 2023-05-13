<template>
    <div
    class="flex flex-col w-full relative mb-6"
    >
    <img 
    class="w-6 absolute bottom-4 ml-2 filter"
    :src="iconImg">
        <label
        class="text-2xl mb-3" 
        for="">{{ labelText + ':' }}</label>
        <input 
            :type="passwordField ? 'password' : 'text'"
            :placeholder="placeholderText"
            class="pl-9 p-3 text-xl  border-2"
            :value="modelValue"
             @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        />
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        modelValue: {
            type: String,
            default: '',
            required: true,
        },
        labelText: String,
        placeholderText: String,
        iconImg: {
            required: true,
            type: String,
        },
        passwordField: Boolean
    })
    defineEmits(['update:modelValue'])
</script>

<style scoped>

</style>