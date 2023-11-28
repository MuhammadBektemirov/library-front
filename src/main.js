import {createApp} from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import router from "@/plugins/router";
import {createPinia} from "pinia";
import i18n from '@/plugins/i18n/i18n'

createApp(App)
    .use(i18n)
    .use(createPinia())
    .use(router)
    .mount('#app')
