import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomePage from './pages/HomePage';
import CategoriesHome from './pages/CategoriesHome';
import TagsHome from './pages/TagsHome';
import AboutHome from './pages/AboutHome';
import ContactsHome from './pages/ContactsHome';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'home',
            component: HomePage
        },
        {
            path: '/categories',
            name: 'categories',
            component: CategoriesHome
        },
        {
            path: '/tags',
            name: 'tags',
            component: TagsHome
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
        // {
        //     path: '/posts/:id',
        //     name: 'post_show',
        //     component: SinglePost
        // },
    ]
});

export default router