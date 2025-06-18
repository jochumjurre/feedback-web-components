<template>
    <v-app class="pt-12 mb-16 bg-transparent">
        <nav>
            <TheStatusBar />
            <TheHeaderNavigation />
        </nav>
        <main>
            <v-container>
                <!-- Gebruik van Vuetify's <v-row> & <v-col> componenten om de pagina responsive te maken -->
                <v-row>
                    <v-col cols="12" sm="10" md="8" lg="6" class="mx-auto mt-16">
                        <router-view />
                    </v-col>
                </v-row>
            </v-container>
        </main>
        <footer>
            <TheFooterNavigation />
        </footer>
    </v-app>
</template>

<script>
import TheStatusBar from '@/components/outline/TheStatusBar.vue';
import TheHeaderNavigation from '@/components/outline/TheHeaderNavigation.vue';
import TheFooterNavigation from '@/components/outline/TheFooterNavigation.vue';
import { useSettingsStore } from '@/stores/settingsStore'
import { useInspectionsStore } from '@/stores/inspectionsStore'

export default {
    components: {
        TheStatusBar,
        TheHeaderNavigation,
        TheFooterNavigation,
    },
    methods: {
        updateAppBackground(isDark) {
            document.body.classList.toggle('bg-grey-darken-2', isDark)
            document.body.classList.toggle('bg-grey-lighten-5', !isDark)
        }
    },
    computed: {
        settingsStore() {
            return useSettingsStore()
        }
    },
    mounted() {
        this.updateAppBackground(this.settingsStore.preferences.isDarkMode)
        const store = useInspectionsStore()
        store.loadInspections()
    },
    watch: {
        'settingsStore.preferences.isDarkMode'(newValue) {
            this.updateAppBackground(newValue)
        }
    },
};
</script>