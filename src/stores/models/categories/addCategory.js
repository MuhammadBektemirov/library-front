import {defineStore} from "pinia";
import axios from "@/plugins/axios";

export const useAddCategory = defineStore('addCategory', {
    actions: {
        createCategory(data) {
            return new Promise((resolve, reject) => {
                axios.post('categories', data)
                    .then(() => {
                        console.log('Kategoriya yaratildi!')

                        resolve()
                    })
                    .catch(() => {
                        console.warn('Kategoriya yaratishda xatolik!')

                        reject()
                    })
            })
        }
    }
})