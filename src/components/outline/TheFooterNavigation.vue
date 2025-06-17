<template>
    <v-bottom-navigation class="bg-secondary">
        <v-btn to="/inspecties" router class="footer-button" text>
            <v-icon>mdi-bookmark-outline</v-icon>
            <span>Inspecties</span>
        </v-btn>

        <v-btn to="/uitgevoerd" router class="footer-button" text>
            <v-icon>mdi-check-circle-outline</v-icon>
            <span>Uitgevoerd</span>
        </v-btn>

        <v-btn to="/kennisbank" router class="footer-button" text>
            <v-icon>mdi-dots-grid</v-icon>
            <span>Kennisbank</span>
        </v-btn>

        <v-btn to="/instellingen" router class="footer-button" text>
            <v-icon>mdi-cog-outline</v-icon>
            <span>Instellingen</span>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
export default {

}
</script>
