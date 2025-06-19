<template>
    <header>
        <router-link
            :to="returnLocation"
            class="d-flex align-center navigation"
        >
            <v-icon icon="mdi-chevron-left" />
            <v-card-title class="text-h5 mb-0 pa-0">{{ title }}</v-card-title>
        </router-link>
        <v-card-subtitle class="mb-4 mt-2">{{ description }}</v-card-subtitle>
    </header>
</template>

<script>
export default {
    name: 'ContentHeader',
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        returnLocation: {
            type: String,
            default: '/',
        },
    }
}
</script>

<style>
.v-card-subtitle {
    padding-inline: 0;
}
</style>