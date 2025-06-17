<template>
    <div class="text-center">
        <p class="text-h4 text-blue-grey-lighten-1 mt-16 mb-4">Oops!</p>
        <h1 class="text-h2">404 NOT FOUND!</h1>
        <v-btn variant="tonal" class="mt-8">
            <router-link :to="'/'" class="navigation-card">
                <p>Return Home</p>
            </router-link>
        </v-btn>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .navigation-card {
        text-decoration: none;
        color: black;
    }
    .navigation-card:hover {
        text-decoration: underline;
    }
</style>