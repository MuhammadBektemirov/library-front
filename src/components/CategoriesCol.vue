<script setup>

import {useFetchCategories} from "@/stores/models/categories/getCategories";
import {computed} from "vue";

useFetchCategories().fetchCategories()
const categories = computed(() => useFetchCategories().getCategories)
</script>

<template>
    <div class="col-12 col-md-2">
        <div class="list-group">
            <a
                v-for="category in categories"
                :key="category.id"
                href="#"
                class="list-group-item list-group-item-action"
            >
                {{ category.name }}
            </a>
        </div>
    </div>
</template>

<style scoped>

</style>