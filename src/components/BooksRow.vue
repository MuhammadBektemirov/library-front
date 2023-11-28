<script setup>
import {useFetchBooks} from "@/stores/models/book/getBooks";
import {useRoute} from "vue-router";
import {watch} from "vue";

const host = import.meta.env.VITE_API_URL
const route = useRoute()

useFetchBooks().fetchBooks()

watch(
    () => route.params.id,
    (preVal) => {
        if (preVal === undefined) {
            useFetchBooks().fetchBooks()
        } else {
            useFetchBooks().fetchBooks('?category=' + route.params.id)
        }
    },
    {
        immediate: true
    }
)
</script>

<template>
    <div class="row mt-3 mt-md-0">

        <div
            v-for="book in useFetchBooks().getBooks"
            :key="book.id"
            class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-3"
        >
            <div class="card">
                <img :src="host + book.image.contentUrl" class="card-img-top" alt="kitob rasmi">
                <div class="card-body">
                    <h5 class="card-title">{{ book.name }}</h5>
                    <p class="card-text">{{ book.description }}</p>
                    <router-link :to="'/book-info/' + book.id" class="btn btn-primary">O'qish</router-link>
                </div>
            </div>
        </div>

    </div>

</template>

<style scoped>

</style>