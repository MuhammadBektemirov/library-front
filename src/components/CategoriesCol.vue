<script setup>

import {useFetchCategories} from "@/stores/models/categories/getCategories";
import {computed} from "vue";

useFetchCategories().fetchCategories()
const categories = computed(() => useFetchCategories().getCategories)
</script>

<template>
    <div class="col-12 col-md-2">
        <div class="list-group">
            <router-link
                v-for="category in categories"
                :key="category.id"
                :to="'/categories/' + category.id"
                class="list-group-item list-group-item-action"
            >
                {{ category.name }}
            </router-link>
        </div>
    </div>
</template>

<style scoped>

</style>