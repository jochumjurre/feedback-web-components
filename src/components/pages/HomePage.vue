<template>
    <v-row class="mt-16 mb-8">
        <v-col
            v-for="(item) in this.menuItems"
            :key="item.title"
            cols="6"
        >
            <CardHome
                :title="item.title"
                :prependIcon="item.icon"
                :locationUrl="item.location"
            />
        </v-col>
    </v-row>
</template>

<script>
import CardHome from '@/components/utilities/CardHome.vue';

export default {
    name: 'HomePage',
    components: {
        CardHome,
    },
    data() {
        return {
            // Navigatieknoppen
            menuItems: [
                {
                    title: 'Openstaande Inspecties',
                    icon: 'mdi-bookmark-outline',
                    location: '/inspecties',
                },
                {
                    title: 'Uitgevoerde Inspecties',
                    icon: 'mdi-check-circle-outline',
                    location: '/uitgevoerd',
                },
                {
                    title: 'Kennisbank',
                    icon: 'mdi-dots-grid',
                    location: '/kennisbank',
                },
                {
                    title: 'Instellingen',
                    icon: 'mdi-cog-outline',
                    location: '/instellingen',
                },
            ],
        };
    },
};
</script>
