<script setup>

import HeaderRow from "@/components/HeaderRow.vue";
import CategoriesCol from "@/components/CategoriesCol.vue";
import FooterRow from "@/components/FooterRow.vue";
</script>

<template>
    <div class="container-fluid">
        <HeaderRow/>

        <div class="row mt-3">
            <CategoriesCol/>

            <div class="col-12 col-md-10">
                <router-view/>
            </div>

        </div>

        <FooterRow/>
    </div>

</template>

<style scoped>

</style>