<script setup>
import FormInput from "@/components/tags/FormInput.vue";
import ButtonTag from "@/components/tags/ButtonTag.vue";
</script>

<template>
    <div class="row vh-100 justify-content-center align-items-center">
        <div class="col-12 col-sm-8 col-md-6 col-xl-4">
            <div class="row mb-3">
                <div class="col-6">
                    <ButtonTag text="Kirish" class="w-100 btn-outline-success"/>
                </div>
                <div class="col-6">
                    <ButtonTag text="Ro'yxatdan o'tish" class="w-100 btn-outline-success"/>
                </div>
            </div>
            <form>
                <FormInput id="signInEmail" label-name="Email" input-type="email"/>
                <FormInput id="signInPassword" label-name="Parol"/>
                <ButtonTag text="Kirish" class="btn-primary mb-3"/>
            </form>

            <form>
                <FormInput id="signUpEmail" label-name="Email" input-type="email"/>
                <FormInput id="signUpAge" label-name="Yoshingiz" input-type="number"/>
                <FormInput id="signUpPassword" label-name="Parol"/>
                <FormInput id="signUpConfirmPassword" label-name="Parolni tasdiqlang">
                    <small class="text-danger">Parollar mos kelmadi!</small>
                </FormInput>
                <ButtonTag text="Ro'yxatdan o'tish" class="btn-primary"/>
            </form>

        </div>
    </div>
</template>

<style scoped>

</style>