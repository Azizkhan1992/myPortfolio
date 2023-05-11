import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isLang: false,
        social: [
            {id: 1, name: 'telegram', link: 'https://t.me/UzbNAU'}
        ],
        portfolio: [
            {
                id: 1,
                title: {
                    uz: 'Termez Arxeologiya Muzeyi',
                    ru: 'Термез Археология Музей',
                    en: 'Termez Archeology Museum',
                    tr: 'Tirmiz Arkeoloji Müzesi'
                },
                description: 'Сайт полностью сделан вручную в Figma.',
                link: 'https://termezmuseum.daac.uz/',
                img: '1.png'
            },
            {
                id: 2,
                title: {
                    uz: 'O\'zbekiston Davlat San\'at Muzeyi',
                    ru: 'Государственный Музей Искусств Узбекистана',
                    en: 'State Museum of Arts of Uzbekistan',
                    tr: 'Özbekistan Devlet Sanat Müzesi'
                },
                description: 'Sayt to\'liq Figmada qo\'lda qilingan',
                link: 'https://stateartmuseum.daac.uz/',
                img: 's1.png'
            },
            {
                id: 3,
                title: {
                    uz: 'Pharm Forum',
                    ru: 'Фарм Форум',
                    en: 'Pharm Forum',
                    tr: 'Eczacılık Forumu'
                },
                description: '',
                link: 'https://uz-pharmforum.netlify.app/',
                img: 'ph.png'
            },
            {
                id: 4,
                title: {
                    uz: 'Sayohat Agentligi',
                    ru: 'Туристическое агенство',
                    tr: 'Seyahat Acentası',
                    en: 'Travel agency'
                },
                description: '',
                link: 'https://travel-agency-v.netlify.app/',
                img: 'tr.png'
            },
            {
                id: 5,
                title: {
                    uz: 'E-commerce',
                    ru: 'E-commerce',
                    tr: 'E-commerce',
                    en: 'E-commerce'
                },
                link: 'https://v3-ecommerce.netlify.app/home',
                img: 'ecom.png'
            },
            {
                id: 6,
                title: {
                    uz: 'Bima Tashuvchilar',
                    ru: 'Бима Перевозчики',
                    tr: 'Bima Taşıyıcılar',
                    en: 'Bima Carriers'
                },
                link: 'https://bimacarriers.netlify.app/',
                isDesc: true,
                img: 'bc1.png'
            },
            {
                id: 7,
                title: {
                    uz: 'Buxoro',
                    ru: 'Бухара',
                    tr: 'Buhara',
                    en: 'Bukhara'
                },
                link: 'https://azizkhan1992.github.io/OurBukhara/',
                isDesc: true,
                img: 'b1.png'
            },
        ]
    },
    actions: {},
    mutations: {
        changeLang(state){
            state.isLang = !state.isLang
        },
        langDeactive(state){
            state.isLang = false
        }
    },
    getters: {
        getCheckLang(state){
            return state.isLang
        }
    }
});

export default store;