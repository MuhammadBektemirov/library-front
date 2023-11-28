<script setup>
import {useRouter} from "vue-router";
import {useI18n} from "vue-i18n";

const router = useRouter()
const i18n = useI18n()

function changeLang(event) {
    i18n.locale.value = event.target.value
}

function logOut() {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    router.push('/login')
}
</script>

<template>
    <div class="row">
        <div class="col">
            <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div class="container-fluid">
                    <router-link class="navbar-brand" to="/">{{ $t('library') }}</router-link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <span @click="logOut" class="nav-link" style="cursor: pointer">{{ $t('logOut') }}</span>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    {{ $t('category') }}
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <router-link class="dropdown-item" to="edit-category">Update || Delete
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link class="dropdown-item" to="create-category">Create</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <router-link to="create-book" class="nav-link">{{ $t('addBook') }}</router-link>
                            </li>
                            <li class="nav-item">
                                <select class="form-select" @click="changeLang($event)">
                                    <option value="uz">UZB</option>
                                    <option value="ru">RUS</option>
                                    <option value="en">ENG</option>
                                </select>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" :placeholder="$t('search')"
                                   aria-label="Search">
                            <button class="btn btn-outline-success" type="submit">{{ $t('search') }}</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<style scoped>

</style>