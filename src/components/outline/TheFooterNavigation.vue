<template>
    <v-bottom-navigation class="bg-secondary">
        <v-btn
            to="/inspecties"
            class="footer-button"
        >
            <v-icon icon="mdi-bookmark-outline" />
            <span>Inspecties</span>
        </v-btn>

        <v-btn
            to="/uitgevoerd"
            class="footer-button"
        >
            <v-icon icon="mdi-check-circle-outline" />
            <span>Uitgevoerd</span>
        </v-btn>

        <v-btn
            to="/kennisbank"
            class="footer-button"
        >
            <v-icon icon="mdi-dots-grid" />
            <span>Kennisbank</span>
        </v-btn>

        <v-btn
            to="/instellingen"
            class="footer-button"
        >
            <v-icon icon="mdi-cog-outline" />
            <span>Instellingen</span>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
export default {
    name: 'TheFooterNavigation',
}
</script>

<style>
.footer-button {
  color: black;
}
</style>
