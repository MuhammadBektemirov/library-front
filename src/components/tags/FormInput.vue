<script setup>
defineProps({
    labelName: {
        type: String,
        required: true
    },
    inputType: {
        type: String,
        default: 'text'
    },
    id: {
        type: String,
        required: true
    },
    modelValue: {}
})

defineEmits(['update:modelValue'])
</script>

<template>
    <div class="mb-3">
        <label :for="id" class="form-label">{{ labelName }}</label>
        <input
            :type="inputType"
            class="form-control"
            :value="modelValue"
            :id="id"
            @input="$emit('update:modelValue', $event.target.value)"
        >
    <slot></slot>
    </div>
</template>

<style scoped>

</style>