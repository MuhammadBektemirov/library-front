import {defineStore} from "pinia";
import axios from "@/plugins/axios";

export const useFetchCategories = defineStore('fetchCategories', {
    actions: {
        fetchCategories() {
            return new Promise((resolve, reject) => {
                axios.get('categories')
                    .then((response) => {
                        console.log('Kategoriyalar olindi!')
                        console.log(response)

                        this.categories = response.data["hydra:member"]
                        this.categoriesCount = response.data["hydra:totalItems"]

                        resolve()
                    })
                    .catch(() => {
                        console.warn('Kategoriyalar olishda xatolik!')

                        reject()
                    })
            })
        }
    },
    state() {
        return {
            categories: [],
            categoriesCount: 0
        }
    },
    getters: {
        getCategories() {
            return this.categories
        }
    }
})