import {createApp} from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import router from "@/plugins/router";

createApp(App)
    .use(router)
    .mount('#app')
