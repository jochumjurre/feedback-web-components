<template>
    <v-bottom-navigation class="bg-secondary">
        <v-btn to="/inspections" router class="footer-button" text>
            <v-icon>mdi-bookmark-outline</v-icon>
            <span>Inspections</span>
        </v-btn>

        <v-btn to="/completed" router class="footer-button" text>
            <v-icon>mdi-check-circle-outline</v-icon>
            <span>Completed</span>
        </v-btn>

        <v-btn to="/docs" router class="footer-button" text>
            <v-icon>mdi-dots-grid</v-icon>
            <span>Docs</span>
        </v-btn>

        <v-btn to="/settings" router class="footer-button" text>
            <v-icon>mdi-cog-outline</v-icon>
            <span>Settings</span>
        </v-btn>
    </v-bottom-navigation>
</template>
