import Vue from 'vue'

window.Vue = require('vue');

import App from './views/App';

import VueRouter from 'vue-router'
import router from './router';
Vue.use(VueRouter)

const app = new Vue({
    el: '#root',

    //! <- Mostra App all'avvio di Vue
    render:h => h(App),
    router
});