<template>
    <Button class="container">
        <v-icon size="x-large">mdi-bell</v-icon>
        <p class="mt-4">{{ title }}</p>
    </Button>
</template>

<script setup>
</script>

<style>
</style>

<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
})
</script>

<style>
    .container {
        border: rgba(0, 0, 0, 0.15) 1px solid;
        border-radius: .25rem;
        font-family: Roboto;
        font-weight: 500;
        font-size: 20px;
        text-align: center;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        padding-block: 3rem;
    }
    .container:hover {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
    }
</style>