import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomePage from './pages/HomePage';
import CategoriesHome from './pages/CategoriesHome';
import CategoryOnPosts from './pages/CategoryOnPosts';
import TagOnPosts from './pages/TagOnPosts';
import TagsHome from './pages/TagsHome';
import AboutHome from './pages/AboutHome';
import ContactsHome from './pages/ContactsHome';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: ('/', '/home'),
            name: 'home',
            component: HomePage
        },
        {
            path: '/categories',
            name: 'categories',
            component: CategoriesHome
        },
        {
            path: '/categories/:id',
            name: 'categoryOnPosts',
            component: CategoryOnPosts
        },
        {
            path: '/tags',
            name: 'tags',
            component: TagsHome
        },
        {
            path: '/tags/:id',
            name: 'tagOnPosts',
            component: TagOnPosts
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