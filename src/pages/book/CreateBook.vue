<script setup>

import FormInput from "@/components/tags/FormInput.vue";
import ButtonTag from "@/components/tags/ButtonTag.vue";
import {reactive, ref} from "vue";
import {useCreateMediaObject} from "@/stores/models/mediaObject/createMediaObject";
import {useAddBook} from "@/stores/models/book/createBook";
import {useFetchCategories} from "@/stores/models/categories/getCategories";

let isLoading = ref(false)
let selectedImage = ref(null)
let imageFile = ref()
let book = reactive({
    name: '',
    description: '',
    text: '',
    category: '',
    image: ''
})

function selectImage(event) {
    imageFile = new FormData()

    imageFile.append('file', event.target.files[0])

    selectedImage.value = URL.createObjectURL(event.target.files[0])
}

function create() {
    isLoading.value = true

    useCreateMediaObject().createImage(imageFile)
        .then(() => {
            book.image = useCreateMediaObject().getCreatedFile['@id']

            useAddBook().createBook(book)
        })
        .finally(() => {
            isLoading.value = false
        })
}

</script>

<template>
    <div style="min-height: 75vh">
        <div class="row">
            <div class="col-12 col-md-6">
                <h3 class="text-center mb-3">Kitob qo'shish</h3>
                <FormInput v-model="book.name" id="name" label-name="Kitob nomi"/>
                <FormInput v-model="book.description" id="description" label-name="Tavsif"/>
                <textarea v-model="book.text" class="form-control mb-3" placeholder="Matn"/>

                <select v-model="book.category" class="form-select mb-3">
                    <option
                        v-for="category in useFetchCategories().getCategories"
                        :key="category.id"
                        :value="category['@id']"
                    >
                        {{ category.name }}
                    </option>
                </select>

                <input @change="selectImage($event)" type="file" class="form-control mb-3">
                <ButtonTag @click="create" text="Yaratish" class="btn-primary"/>
            </div>
            <div v-if="selectedImage !== null" class="col-12 col-md-6">
                <img :src="selectedImage" alt="..." class="img-fluid">
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>