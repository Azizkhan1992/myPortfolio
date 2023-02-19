import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'main-layout',
        component: () => import('@/components/main.vue')
    },
];

// let locale = window.location.pathname.replace(/^\/([^/]+).*/i,'$1')

const router = new VueRouter({
    mode: 'history',
    // base: (locale.trim().length && locale !== "/") ? '/' + locale : i18n.fallbackLocale,
    routes
});

export default router