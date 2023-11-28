<script setup>

import {useFetchBook} from "@/stores/models/book/getBook";
import {useRoute} from "vue-router";

const route = useRoute()
const bookStore = useFetchBook()

bookStore.fetchBook(route.params.bookId)
</script>

<template>
    <div style="min-height: 70vh">
        <div class="row">
            <div class="col-6"><h1>{{ bookStore.getBook.name }}</h1></div>
            <small class="col-6 text-end">{{ bookStore.getBook.createdAt?.slice(0, 10) }}</small>
            <div class="col-12">
                {{ bookStore.getBook.text }}
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>