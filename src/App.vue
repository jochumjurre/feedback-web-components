<template>
    <v-app class="bg-white pt-12">
        <statusBar />
        <mainHeader />

        <v-main>
            <div class="cardContainer">
                <cardHome title="Scheduled" prepend-icon="mdi-bookmark-outline" color="secondary"/>
                <cardHome title="Completed" prepend-icon="mdi-check-circle" color="secondary"/>
                <cardHome title="Knowledge base" prepend-icon="mdi-dots-grid" color="secondary"/>
                <cardHome title="Settings" prepend-icon="mdi-cog" color="secondary"/>
            </div>
        </v-main>

        <bottomNavigation />
    </v-app>
</template>

<script setup>
import statusBar from './components/outline/statusBar.vue';
import mainHeader from '@/components/outline/mainHeader.vue'
import bottomNavigation from '@/components/outline/bottomNavigation.vue'
</script>

<style>
    .cardContainer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin-inline: 1rem;
    }
</style>
