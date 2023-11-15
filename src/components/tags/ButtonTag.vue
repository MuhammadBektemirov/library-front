<script setup>
defineProps({
    text: {
        type: String,
        required: true
    },
    buttonType: {
        type: String,
        default: 'button'
    },
    loading: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <button :type="buttonType" class="btn">
        <span v-if="loading" class="spinner-border spinner-border-sm"/>
        <span v-else>{{ text }}</span>
    </button>
</template>

<style scoped>

</style>