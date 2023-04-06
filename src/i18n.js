import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from '@/locales/index.js'

Vue.use(VueI18n)

export const i18n = new VueI18n({
    locale: 'ru', // set locale
    fallbackLocale: 'ru',
    messages // set locale messages
})