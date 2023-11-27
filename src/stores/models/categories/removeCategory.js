import {defineStore} from "pinia";
import axios from "@/plugins/axios";

export const useRemoveCategory = defineStore('removeCategory', {
    actions: {
        deleteCategory(id) {
            return new Promise((resolve, reject) => {
                axios.delete('categories/' + id)
                    .then(() => {
                        console.log('Kategoriya o\'chirildi!')

                        resolve()
                    })
                    .catch(() => {
                        console.warn('Kategoriya o\'chirishda xatolik!')

                        reject()
                    })
            })
        }
    }
})