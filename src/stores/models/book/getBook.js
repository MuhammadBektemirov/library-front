import {defineStore} from "pinia";
import axios from "@/plugins/axios";

export const useFetchBook = defineStore('fetchBook', {
    actions: {
        fetchBook(id) {
            return new Promise((resolve, reject) => {
                axios.get('books/' + id)
                    .then((response) => {
                        console.log('Kitob olindi!')
                        this.book = {
                            "iri": response.data['@id'],
                            "id": response.data.id,
                            "name": response.data.name,
                            "description": response.data.description,
                            "text": response.data.text,
                            "createdAt": response.data.createdAt,
                            "category": {
                                "id": response.data.category.id,
                                "name": response.data.category.name
                            },
                            "image": {
                                "contentUrl": response.data.image.contentUrl,
                                "id": response.data.image.id
                            }
                        }

                        resolve()
                    })
                    .catch(() => {
                        console.warn('Kitob olishda xatolik!')

                        reject()
                    })
            })
        }
    },
    state() {
        return {
            book: {}
        }
    },
    getters: {
        getBook() {
            return this.book
        }
    }
})