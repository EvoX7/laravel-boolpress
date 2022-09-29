import App from './views/App';
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import HomePage from './pages/HomePage';
import AboutHome from './pages/AboutHome';
import Contacts from './pages/Contacts';

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
            component: Contacts
        },
    ]
});

export default router