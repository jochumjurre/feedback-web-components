<template>
    <v-app-bar
        :elevation="2"
        color="primary"
        scroll-behavior="collapse"
        scroll-threshold="70"
    >
        <div class="d-flex w-100 justify-space-between">
            <router-link
                to="/"
                class="d-flex align-center router-link"
                style="width: fit-content;"
            >
                <v-img
                    class="mx-2"
                    src="../../assets/logo-light.svg"
                    max-height="40"
                    max-width="40"
                    contain
                />
                <v-app-bar-title
                    class="navigation-title"
                    style="width:200px;"
                >
                    Real Estate Care
                </v-app-bar-title>
            </router-link>
            <div>
                <v-btn to="/login" router icon>
                    <v-icon>mdi-login</v-icon>
                </v-btn>
                <v-btn to="/settings" router icon>
                    <v-icon>mdi-cog-outline</v-icon>
                </v-btn>
            </div>
        </div>
    </v-app-bar>
</template>

<script>
export default {
    
}
</script>
