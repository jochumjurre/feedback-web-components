<template>
    <v-bottom-navigation
        class="bg-secondary">
        <v-btn value="recent">
            <v-icon>mdi-wrench</v-icon>

            <span>Active Task</span>
        </v-btn>

        <v-btn value="favorites">
            <v-icon>mdi-magnify</v-icon>

            <span>Search</span>
        </v-btn>

        <v-btn value="nearby">
            <v-icon>mdi-information</v-icon>

            <span>Information</span>
        </v-btn>
    </v-bottom-navigation>
</template>