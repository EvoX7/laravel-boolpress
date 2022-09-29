import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomePage from './pages/HomePage';
import AboutHome from './pages/AboutHome';
import ContactsHome from './pages/ContactsHome';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutHome
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsHome
        },
    ]
});

export default router