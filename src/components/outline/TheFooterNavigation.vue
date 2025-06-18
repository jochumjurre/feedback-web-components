<template>
    <v-bottom-navigation class="bg-secondary">
        <v-btn
            to="/inspecties"
            router
            class="footer-button"
            text
        >
            <v-icon icon="mdi-bookmark-outline" />
            <span>Inspecties</span>
        </v-btn>

        <v-btn
            to="/uitgevoerd"
            router
            class="footer-button"
            text
        >
            <v-icon icon="mdi-check-circle-outline" />
            <span>Uitgevoerd</span>
        </v-btn>

        <v-btn
            to="/kennisbank"
            router
            class="footer-button"
            text
        >
            <v-icon icon="mdi-dots-grid" />
            <span>Kennisbank</span>
        </v-btn>

        <v-btn
            to="/instellingen"
            router
            class="footer-button"
            text
        >
            <v-icon icon="mdi-cog-outline" />
            <span>Instellingen</span>
        </v-btn>
    </v-bottom-navigation>
</template>

<style>
.footer-button {
  color: black;
}
</style>
