import {defineStore} from "pinia";
import axios from "axios";

export const useAuthorization = defineStore('authorization', {
    actions: {
        authUser(data) {
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:8507/api/users/auth', data)
                    .then((response) => {
                        console.log('Token yaratildi!')
                        console.log(response)

                        localStorage.setItem('accessToken', response.data.accessToken)
                        localStorage.setItem('refreshToken', response.data.refreshToken)

                        resolve()
                    })
                    .catch(() => {
                        console.warn('Token yaratishda xatolik!')

                        reject()
                    })
            })
        }
    }
})