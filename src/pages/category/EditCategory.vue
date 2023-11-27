<script setup>

import FormInput from "@/components/tags/FormInput.vue";
import ButtonTag from "@/components/tags/ButtonTag.vue";
import {ref} from "vue";
import {useFetchCategories} from "@/stores/models/categories/getCategories";
import {useChangeCategory} from "@/stores/models/categories/changeCategory";
import {useRouter} from "vue-router";
import {useRemoveCategory} from "@/stores/models/categories/removeCategory";

let isChange = ref(false)
let id = ref()
let categoryName = ref('')
const router = useRouter()

function change() {
    useChangeCategory().putCategory(id.value, {name: categoryName.value})
        .then(() => {
            useFetchCategories().fetchCategories()
            isChange.value = false
        })
}

function remove(id) {
    useRemoveCategory().deleteCategory(id)
        .then(() => {
            useFetchCategories().fetchCategories()
        })
}
</script>

<template>
    <div style="min-height: 70vh">
        <div v-if="isChange" class="row">
            <div class="col-12 col-md-6">
                <FormInput v-model="categoryName" id="categoryName" label-name="Kategoriya nomi"/>
                <ButtonTag @click="change" class="btn-primary" text="O'zgartirish"/>
            </div>
        </div>
        <table v-else class="table">
            <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Kategoriya nomi</th>
                <th scope="col">O'zgartirish</th>
                <th scope="col">O'chirish</th>
            </tr>
            </thead>
            <tbody class="table-group-divider">
            <tr v-for="category in useFetchCategories().getCategories" :key="category.id">
                <th scope="row">{{ category.id }}</th>
                <td>{{ category.name }}</td>
                <td>
                    <span @click="isChange = true; id = category.id; categoryName = category.name "
                          class="cursor text-success">Change</span>
                </td>
                <td>
                    <span @click="remove(category.id)" class="cursor text-danger">Delete</span>
                </td>
            </tr>
            </tbody>
        </table>
    </div>

</template>

<style scoped>
.cursor {
    cursor: pointer;
}
</style>