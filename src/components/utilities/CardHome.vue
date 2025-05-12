<template>
    <button
        :class="isHovered ? 'elevation-4' : 'elevation-2'"
        @mouseover="this.isHovered = true"
        @mouseleave="this.isHovered = false"
        class="d-flex flex-column ga-4 align-center justify-center pt-8 pb-8 w-100 border rounded-lg bg-white text-center"
    >
        <v-icon size="x-large">{{ prependIcon }}</v-icon>
        <p>{{ title }}</p>
    </button>
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
    },
    data() {
        return {
            // Track hover state
            isHovered: false,
        };
    },
};
</script>
