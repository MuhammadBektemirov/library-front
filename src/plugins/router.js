import {createRouter, createWebHistory} from "vue-router";
import {defineAsyncComponent} from "vue";

const routes = [
    {
        path: '/',
        component: () => import('@/pages/HomePage.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
        }
    },
    {
        path: '/book-info',
        component: () => import('@/pages/BookInfoPage.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
        }
    },
    {
        path: '/login',
        component: () => import('@/pages/LoginPage.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/BlankLayout.vue'))
        }
    },
    {
        path: '/edit-category',
        component: () => import('@/pages/category/EditCategory.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
        }
    },
    {
        path: '/create-book',
        component: () => import('@/pages/book/CreateBook.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
        }
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})