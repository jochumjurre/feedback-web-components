<template>
    <v-app class="bg-white pt-12 mb-16">
        <StatusBar />
        <MainHeader />

        <v-container>
            <v-row justify="center" class="mt-16 mb-4">
                <v-col cols="12" md="8" xl="4">
                    <div class="cardContainer mb-8">
                        <CardHome title="Scheduled" prepend-icon="mdi-bookmark-outline" color="secondary"/>
                        <CardHome title="Completed" prepend-icon="mdi-check-circle-outline" color="secondary"/>
                        <CardHome title="Knowledge base" prepend-icon="mdi-dots-grid" color="secondary"/>
                        <CardHome title="Settings" prepend-icon="mdi-cog-outline" color="secondary"/>
                    </div>
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
    }

}
</script>

<style>
    .cardContainer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
</style>
