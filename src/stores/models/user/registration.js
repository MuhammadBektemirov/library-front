import {defineStore} from "pinia";
import axios from "axios";

export const useRegistration = defineStore('registration', {
    actions: {
        createUser(data) {
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:8507/api/users', data)
                    .then(() => {
                        console.log("then - so'rov muvaffaqiyatli bo'lsa ishga tushadi!")
                        console.log("user yaratildi!!!")

                        resolve()
                    })
                    .catch(() => {
                        console.warn("catch - so'rov xatolik bo'lsa ishga tushadi")
                        console.warn("user yaratishda xatolik!")

                        reject()
                    })
                    .finally(() => {
                        console.info("finally doim ishlaydi")
                    })
            })
        }
    }
})