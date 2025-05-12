<template>
    <v-app class="bg-white pt-12 mb-16">
        <StatusBar />
        <MainHeader />
        <v-container>
            <!-- Content area: row & column to get a responsive width -->
            <v-row>
                <v-col cols="12" sm="8" md="6" lg="4" class="mx-auto">
                    <!-- Menu buttons -->
                    <v-row class="mt-16 mb-8">
                        <v-col
                        v-for="(item) in menuItems"
                        :key="item.title"
                        cols="6"
                        >
                            <CardHome
                            :title="item.title"
                            :prepend-icon="item.icon"
                            color="secondary"/>
                        </v-col>
                    </v-row>
                    
                    <InspectionDisplay />
                </v-col>
            </v-row>
        </v-container>
        <BottomNavigation />
    </v-app>
</template>

<script>
import CardHome from './components/utilities/CardHome.vue';
import StatusBar from './components/outline/StatusBar.vue';
import MainHeader from '@/components/outline/MainHeader.vue';
import BottomNavigation from '@/components/outline/BottomNavigation.vue';
import InspectionDisplay from '@/components/utilities/InspectionDisplay.vue';

export default {
    components: {
        CardHome,   
        StatusBar,
        MainHeader,
        BottomNavigation,
        InspectionDisplay,
    },
    data() {
        return {
            // Array of navigation cards
            menuItems: [
                { title: 'Scheduled', icon: 'mdi-bookmark-outline' },
                { title: 'Knowledge base', icon: 'mdi-dots-grid' },
                { title: 'Completed', icon: 'mdi-check-circle-outline' },
                { title: 'Settings', icon: 'mdi-cog-outline' },
            ],
        };
    },
};
</script>
