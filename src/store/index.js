import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        social: [
            {id: 1, name: 'telegram', link: 'https://t.me/UzbNAU'}
        ],
        portfolio: [
            {
                id: 1,
                title: 'Термез Археология Музей',
                description: 'Сайт полностью сделан вручную в Figma.',
                link: 'https://termezmuseum.daac.uz/',
                img: '1.png'
            },
            {
                id: 2,
                title: 'Государственный Музей Искусств Узбекистана ',
                description: 'Sayt to\'liq Figmada qo\'lda qilingan',
                link: 'https://stateartmuseum.daac.uz/',
                img: 's1.png'
            },
            {
                id: 3,
                title: 'Бухара',
                link: 'https://azizkhan1992.github.io/OurBukhara/',
                isDesc: true,
                img: 'b1.png'
            },
            {
                id: 4,
                title: 'Сегвеи',
                description: '',
                link: 'https://azizkhan1992.github.io/New_Segways_Vue/',
                img: 'ns1.png'
            },
            {
                id: 5,
                title: 'Образец организационной таблицы',
                link: 'https://org-tables-example.netlify.app/',
                img: 'oe.png'
            },
            {
                id: 6,
                title: 'Домашние помощники',
                link: 'https://azizkhan1992.github.io/Home_Helpers/',
                img: 'h1.png'
            },
            {
                id: 7,
                title: 'Бима Перевозчики',
                link: 'https://bimacarriers.netlify.app/',
                isDesc: true,
                img: 'bc1.png'
            },
            {
                id: 8,
                title: 'Дом-музей',
                link: 'https://home-museum.netlify.app/',
                img: 'hm1.png'
            },
            {
                id: 9,
                title: 'Потоковое вещание фильмов тест Nuxt',
                link: 'https://movies-streaming-in-nuxt.netlify.app/',
                isDesc: true,
                img: 'ms1.png'
            },
        ]
    },
    actions: {},
    mutations: {},
    getters: {}
});

export default store;