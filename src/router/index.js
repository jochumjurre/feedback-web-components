import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/pages/HomePage.vue';
import InspectionsOpen from '@/components/pages/InspectionsOpenPage.vue';
import InspectionsCompleted from '@/components/pages/InspectionsCompletedPage.vue';
import Settings from '@/components/pages/SettingsPage.vue';
import KnowledgeBase from '@/components/pages/KnowledgeBasePage.vue';
import NotFound from '@/components/pages/NotFoundPage.vue';
import Login from '@/components/pages/LoginPage.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/inspections',
        name: 'inspections-open',
        component: InspectionsOpen
    },
    {
        path: '/completed',
        name: 'inspections-completed',
        component: InspectionsCompleted
    },
    {
        path: '/settings',
        name: 'settings',
        component: Settings
    },
    {
        path: '/docs',
        name: 'knowledge-base',
        component: KnowledgeBase
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
      path: "/:notFound",
      name: 'not-found',
      component: NotFound,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;