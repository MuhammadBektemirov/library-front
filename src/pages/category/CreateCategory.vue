<script setup>

import FormInput from "@/components/tags/FormInput.vue";
import ButtonTag from "@/components/tags/ButtonTag.vue";
import {ref} from "vue";
import {useAddCategory} from "@/stores/models/categories/addCategory";
import {useRouter} from "vue-router";
import {useFetchCategories} from "@/stores/models/categories/getCategories";

let isLoading = ref(false)
let categoryName = ref('')
const router = useRouter()

function create() {
    isLoading.value = true

    useAddCategory().createCategory({name: categoryName.value})
        .then(() => {
            useFetchCategories().fetchCategories()
            router.push('/')
        })

    isLoading.value = false
}
</script>

<template>
    <div class="row" style="min-height: 75vh">
        <div class="col-12 col-md-6">
            <FormInput class="mt-3 mt-md-0" v-model="categoryName" id="name" label-name="Kategoriya nomi"/>
            <ButtonTag @click="create" text="Yaratish" class="btn-primary" :loading="isLoading"/>
        </div>
    </div>
</template>

<style scoped>

</style>