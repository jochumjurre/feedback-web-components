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
app.mount('#app')
