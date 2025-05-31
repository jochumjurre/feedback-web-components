import { createRouter, createWebHistory } from 'vue-router'
import HomeNavigation from '@/components/pages/HomeNavigation.vue';
import Inspections from '@/components/utilities/InspectionDisplay.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeNavigation
    },
    {
        path: '/inspections',
        name: 'inspections',
        component: Inspections
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;