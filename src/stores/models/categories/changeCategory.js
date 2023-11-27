import {defineStore} from "pinia";
import axios from "@/plugins/axios";

export const useChangeCategory = defineStore('changeCategory', {
    actions: {
        putCategory(id, data) {
            return new Promise((resolve, reject) => {
                axios.put('categories/' + id, data)
                    .then(() => {
                        console.log('Kategoriya o\'zgartirildi!')

                        resolve()
                    })
                    .catch(() => {
                        console.warn('Kategoriya o\'zgartirishda xatolik!')

                        reject()
                    })
            })
        }
    }
})