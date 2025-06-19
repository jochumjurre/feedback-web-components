/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins';
import router from './router';
import { createPinia } from "pinia";

// Components
import App from './App.vue';
import ContentHeader from '@/components/utilities/ContentHeader.vue'

// Composables
import { createApp } from 'vue'

// Styles
import 'unfonts.css'

// Pinia
const pinia = createPinia();
const app = createApp(App)
    .use(pinia)

registerPlugins(app)
app.use(router)

// Registreren van globale componenten
app.component('ContentHeader', ContentHeader)

app.mount('#app')
