<template>
    <div
    class="flex flex-col w-full"
    >
        <label
        class="text-2xl mb-3" 
        for="">{{ labelText + ':' }}</label>
        <input 
            type="text"
            :placeholder="placeholderText"
            class="p-3 text-xl  border-2"
        />
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        labelText: String,
        placeholderText: String,
        iconImg: String,
    })
</script>

<style scoped>

</style>