<template>
    <v-app-bar :elevation="2" color="primary" scroll-behavior="collapse" scroll-threshold="70">
        <v-img
            class="mx-2"
            src="../../assets/logo-light.svg"
            max-height="40"
            max-width="40"
            contain
        ></v-img>
        <v-app-bar-title>Real Estate Care</v-app-bar-title>
            <v-btn icon>
                <v-icon>mdi-bell</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-cog</v-icon>
            </v-btn>
    </v-app-bar>
</template>