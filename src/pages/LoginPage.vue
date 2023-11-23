<script setup>
import FormInput from "@/components/tags/FormInput.vue";
import ButtonTag from "@/components/tags/ButtonTag.vue";
import {reactive, ref} from "vue";
import {useRegistration} from "@/stores/models/user/registration";
import {useAuthorization} from "@/stores/models/user/authorization";
import {useRouter} from "vue-router";

let isLogin = ref(true)
let isLoading = ref(false)
const router = useRouter()

// section AUTHORIZATION
let authorization = reactive({
    email: '',
    password: ''
})

function signIn() {
    isLoading.value = true

    useAuthorization().authUser(authorization)
        .then(() => {
            // Token olingach bosh sahifaga o'tamiz
            router.push('/')
        })

    isLoading.value = false
}
// section AUTHORIZATION

let isValid = ref(false)

let registration = reactive({
    email: '',
    age: 0,
    password: '',
    confirmPassword: ''
})

function signUp() {
    isLoading.value = true
    isValid.value = false

    let data = {
        email: registration.email,
        age: +registration.age,
        password: registration.password
    }

    if (registration.password === registration.confirmPassword) {
        useRegistration().createUser(data)
            .then(() => {
                useAuthorization().authUser({email: data.email, password: data.password})
                    .then(() => {
                        router.push('/')
                    })
            })
    } else {
        isValid.value = true
    }

    isLoading.value = false
}

</script>

<template>
    <div class="row vh-100 justify-content-center align-items-center">
        <div class="col-12 col-sm-8 col-md-6 col-xl-4">
            <div class="row mb-3">
                <div class="col-6">
                    <ButtonTag @click="isLogin = true" text="Kirish" class="w-100"
                               :class="isLogin ? 'btn-success' : 'btn-outline-success'"/>
                </div>
                <div class="col-6">
                    <ButtonTag @click="isLogin = false" text="Ro'yxatdan o'tish" class="w-100"
                               :class="!isLogin ? 'btn-success' : 'btn-outline-success'"/>
                </div>
            </div>
            <form v-if="isLogin">
                <FormInput v-model="authorization.email" id="signInEmail" label-name="Email" input-type="email"/>
                <FormInput v-model="authorization.password" id="signInPassword" label-name="Parol"/>
                <ButtonTag @click="signIn" :loading="isLoading" text="Kirish" class="btn-primary mb-3"/>
            </form>

            <form v-else>
                <FormInput v-model="registration.email" id="signUpEmail" label-name="Email" input-type="email"/>
                <FormInput v-model="registration.age" id="signUpAge" label-name="Yoshingiz" input-type="number"/>
                <FormInput v-model="registration.password" id="signUpPassword" label-name="Parol"/>
                <FormInput v-model="registration.confirmPassword" id="signUpConfirmPassword"
                           label-name="Parolni tasdiqlang">
                    <small v-if="isValid" class="text-danger">Parollar mos kelmadi!</small>
                </FormInput>
                <ButtonTag :loading="isLoading" @click="signUp" text="Ro'yxatdan o'tish" class="btn-primary"/>
            </form>

        </div>
    </div>
</template>

<style scoped>

</style>