<template>
    <v-row class="mt-16 mb-8">
        <v-col
            v-for="(item) in menuItems"
            :key="item.title"
            cols="6"
        >
            <CardHome
                :title="item.title"
                :prepend-icon="item.icon"
                :locationUrl="item.location"
                color="secondary"
            />
        </v-col>
    </v-row>
</template>

<script>
import CardHome from '@/components/utilities/CardHome.vue';

export default {
    components: {
        CardHome,
    },
    data() {
        return {
            // Navigation buttons
            menuItems: [
                {
                    title: 'Inspecties',
                    icon: 'mdi-bookmark-outline',
                    location: '/inspections'
                },
                {
                    title: 'Uitgevoerde inspecties',
                    icon: 'mdi-check-circle-outline',
                    location: '/completed'
                },
                {
                    title: 'Kennisbank',
                    icon: 'mdi-dots-grid',
                    location: '/docs'
                },
                {
                    title: 'Instellingen',
                    icon: 'mdi-cog-outline',
                    location: '/settings'
                },
            ],
        };
    },
};
</script>
