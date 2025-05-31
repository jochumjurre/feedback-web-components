<template>
    <v-app class="bg-white pt-12 mb-16">
        <StatusBar />
        <MainHeader />
        <v-container>
            <!-- Use Vuetify's <v-row> & <v-col> to achieve a responsive content area -->
            <v-row>
                <v-col cols="12" sm="8" md="6" lg="4" class="mx-auto mt-16">
                    <router-view />
                </v-col>
            </v-row>
        </v-container>
        <BottomNavigation />
    </v-app>
</template>

<script>
import StatusBar from './components/outline/StatusBar.vue';
import MainHeader from '@/components/outline/MainHeader.vue';
import BottomNavigation from '@/components/outline/BottomNavigation.vue';

export default {
    name: 'app',
    components: {
        StatusBar,
        MainHeader,
        BottomNavigation,
    }
};
</script>
