import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/pages/HomePage.vue';
import InspectionsOpen from '@/components/pages/InspectionsTodoPage.vue';
import InspectionsCompleted from '@/components/pages/InspectionsDonePage.vue';
import Settings from '@/components/pages/SettingsPage.vue';
import KnowledgeBase from '@/components/pages/KnowledgeBasePage.vue';
import NotFound from '@/components/pages/NotFoundPage.vue';
import Login from '@/components/pages/LoginPage.vue';
import NewInspection from '@/components/pages/InspectionsFormPage.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/inspecties',
        name: 'inspecties',
        component: InspectionsOpen,
    },
    {
        path: '/uitgevoerd',
        name: 'uitgevoerd',
        component: InspectionsCompleted,
    },
    {
        path: '/instellingen',
        name: 'instellingen',
        component: Settings,
    },
    {
        path: '/kennisbank',
        name: 'kennisbank',
        component: KnowledgeBase,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/opgeven',
        name: 'nieuwe-inspectie',
        component: NewInspection,
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