import {defineStore} from "pinia";
import axios from "@/plugins/axios";

export const useFetchBooks = defineStore('fetchBooks', {
    actions: {
        fetchBooks(url = '') {
            return new Promise((resolve, reject) => {
                axios.get('books' + url)
                    .then((response) => {
                        this.books = response.data["hydra:member"]
                        this.booksCount = response.data["hydra:totalItems"]

                        console.log('Kitoblar olindi!')
                        resolve()
                    })
                    .catch(() => {
                        console.log('Kitoblar olishda xatolik!')

                        reject()
                    })
            })
        }
    },
    state() {
        return {
            books: [],
            booksCount: 0
        }
    },
    getters: {
        getBooks() {
            return this.books
        }
    }
})