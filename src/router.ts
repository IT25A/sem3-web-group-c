import { createRouter, createWebHistory } from 'vue-router'
import Home from './subpages/home.vue'
import AboutUs from './subpages/aboutus.vue'
import Services from './subpages/services.vue'
import Reviews from './subpages/reviews.vue'
import Contact from './subpages/contact.vue'
import Jobs from './subpages/jobs.vue'
import FAQ from './subpages/faq.vue'

const routes = [
    {
        path: '/subpages/home',
        name: 'home',
        component: Home
    },
    {
        path: '/subpages/aboutus',
        name: 'aboutUs',
        component: AboutUs
        
    },
    {
        path: '/subpages/services',
        name: 'services',
        component: Services
    },
    {
        path: '/subpages/reviews',
        name: 'reviews',
        component: Reviews
    },
    {
        path: '/subpages/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/subpages/jobs',
        name: 'jobs',
        component: Jobs
    },
    {
        path: '/subpages/faq',
        name: 'faq',
        component: FAQ
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
