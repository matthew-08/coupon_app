<template>
  <div class="relative mb-6 flex w-full flex-col">
    <img class="absolute bottom-4 ml-2 w-6 filter" :src="iconImg" />
    <label class="mb-3 text-2xl" for="">{{ labelText + ':' }}</label>
    <input
      :type="passwordField ? 'password' : 'text'"
      :placeholder="placeholderText"
      class="border-2 p-3 pl-9 text-xl"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
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
  labelText: {
    type: String,
    required: true,
  },
  placeholderText: {
    type: String,
    required: true,
  },
  iconImg: {
    required: true,
    type: String,
  },
  passwordField: Boolean,
});
defineEmits(['update:modelValue']);
</script>

<style scoped></style>
