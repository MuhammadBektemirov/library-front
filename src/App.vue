<script setup>

import HeaderRow from "@/components/HeaderRow.vue";
import CategoriesCol from "@/components/CategoriesCol.vue";
import FooterRow from "@/components/FooterRow.vue";
</script>

<template>
    <div class="continer-fluid">
        <HeaderRow/>

        <!-- main qatori boshlandi -->
        <div class="row mt-3">
            <CategoriesCol/>

            <!-- kontent boshlandi -->
            <div class="col-12 col-md-10">
                <router-view/>
            </div>
            <!-- kontent tugadi -->

        </div>
        <!-- main qatori tugadi -->
        `
        <FooterRow/>
    </div>

</template>


<style scoped>
</style>
