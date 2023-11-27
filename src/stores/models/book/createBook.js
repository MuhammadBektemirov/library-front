import {defineStore} from "pinia";
import axios from "@/plugins/axios";

export const useAddBook = defineStore('addBook', {
    actions: {
        createBook(data) {
            return new Promise((resolve, reject) => {
                axios.post('books', data)
                    .then(() => {
                        console.log('Kitob yaratildi!')

                        resolve()
                    })
                    .catch(() => {
                        console.log('Kitob yaratishda xatolik!')

                        reject()
                    })
            })
        }
    }
})