import {createRouter, createWebHistory} from "vue-router";
import {defineAsyncComponent} from "vue";

const ifAuthorized = (to, from, next) => {
    if (localStorage.getItem('accessToken') !== null) {
        next()
    } else {
        next('/login')
    }
}

const ifNotAuthorized = (to, from, next) => {
    if (localStorage.getItem('accessToken') === null) {
        next()
    } else {
        next('/')
    }
}

const routes = [
    {
        path: '/',
        component: () => import('@/pages/HomePage.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
        },
        beforeEnter: ifAuthorized
    },
    {
        path: '/categories/:id',
        component: () => import('@/pages/HomePage.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
        },
        beforeEnter: ifAuthorized
    },
    {
        path: '/book-info/:bookId',
        component: () => import('@/pages/BookInfoPage.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
        },
        beforeEnter: ifAuthorized
    },
    {
        path: '/login',
        component: () => import('@/pages/LoginPage.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/BlankLayout.vue'))
        },
        beforeEnter: ifNotAuthorized
    },
    {
        path: '/create-category',
        component: () => import('@/pages/category/CreateCategory.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
        },
        beforeEnter: ifAuthorized
    },
    {
        path: '/edit-category',
        component: () => import('@/pages/category/EditCategory.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
        },
        beforeEnter: ifAuthorized
    },
    {
        path: '/create-book',
        component: () => import('@/pages/book/CreateBook.vue'),
        meta: {
            layout: defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'))
        },
        beforeEnter: ifAuthorized
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active'
})