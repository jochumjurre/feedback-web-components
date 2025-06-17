<template>
    <v-card class="rounded-lg pa-4 mt-6">
        <router-link to="/" class="d-flex align-center navigation">
            <v-icon>mdi-chevron-left</v-icon>
            <v-card-title class="text-h5 mb-0 pa-0">Open inspecties</v-card-title>
        </router-link>
        <v-card-subtitle class="mb-4 mt-2">Bekijk en beheer je lopende inspecties.</v-card-subtitle>

        <OpenInspections />
    </v-card>
</template>

<script>
import OpenInspections from '@/components/utilities/InspectionDisplay.vue';

export default {
    components: {
        OpenInspections,
    },
}
</script>
