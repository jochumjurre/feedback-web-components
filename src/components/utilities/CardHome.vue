<template>
    <router-link
        :class="isHovered ? 'elevation-4' : 'elevation-2'"
        :to="locationUrl"
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
        class="d-flex flex-column ga-4 align-center justify-center pt-8 pb-8 w-100 border rounded-lg bg-white text-center navigation-card"
    >
        <v-icon size="x-large">{{ prependIcon }}</v-icon>
        <p>{{ title }}</p>
    </router-link>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        prependIcon: {
            type: String,
            required: false,
            default: 'mdi-bell',
        },
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