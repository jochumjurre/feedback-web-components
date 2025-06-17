<template>
    <v-app class="bg-white pt-12 mb-16">
        <TheStatusBar />
        <TheMainHeader />
        <v-container>
            <!-- Use Vuetify's <v-row> & <v-col> to achieve a responsive content area -->
            <v-row>
                <v-col cols="12" sm="8" md="6" lg="4" class="mx-auto mt-16">
                    <router-view />
                </v-col>
            </v-row>
        </v-container>
        <TheFooterNavigation />
    </v-app>
</template>

<script>
import TheStatusBar from '@/components/outline/TheStatusBar.vue';
import TheMainHeader from '@/components/outline/TheHeader.vue';
import TheFooterNavigation from '@/components/outline/TheFooterNavigation.vue';

export default {
    name: 'app',
    components: {
        TheStatusBar,
        TheMainHeader,
        TheFooterNavigation,
    }
};
</script>
