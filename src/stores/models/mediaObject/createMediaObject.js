import {defineStore} from "pinia";
import axios from "@/plugins/axios";

export const useCreateMediaObject = defineStore('createMediaObject', {
    actions: {
        createImage(data) {
            return new Promise((resolve, reject) => {
                axios.post('media_objects', data)
                    .then((response) => {
                        this.createdFile = response.data

                        console.log('Rasm yuklandi!')
                        resolve()
                    })
                    .catch(() => {
                        console.log('Rasm yuklashda xatolik!')

                        reject()
                    })
            })
        }
    },
    state() {
        return {
            createdFile: {}
        }
    },
    getters: {
        getCreatedFile() {
            return this.createdFile
        }
    }
})