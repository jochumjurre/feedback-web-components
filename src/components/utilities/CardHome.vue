<template>
    <router-link
        :class="this.isHovered ? 'elevation-4' : 'elevation-2'"
        :to="locationUrl"
        @mouseover="this.isHovered = true"
        @mouseleave="this.isHovered = false"
        class="navigation-card d-flex flex-column ga-4 align-center justify-center pt-8 pb-8 w-100 border rounded-lg bg-white text-center"
    >
        <v-icon
            size="x-large"
            :icon="prependIcon"
        />
        <p>{{ title }}</p>
    </router-link>
</template>

<script>
export default {
    props: {
        // Titel die wordt weergegeven.
        title: {
            type: String,
            required: true,
        },
        // Pictogram dat wordt weergegeven.
        prependIcon: {
            type: String,
            default: 'mdi-bell',
        },
        // URL waar naartoe wordt doorgestuurd bij klikken op de kaart.
        locationUrl: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            isHovered: false,
        };
    },
};
</script>

<style>
.navigation-card {
    text-decoration: none;
}
.navigation-card:hover {
    text-decoration: underline;
}
</style>
