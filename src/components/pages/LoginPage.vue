<template>
    <v-card class="rounded-lg pa-4 mt-6">
        <router-link to="/" class="d-flex align-center navigation">
            <v-icon>mdi-chevron-left</v-icon>
            <v-card-title class="text-h5 mb-0 pa-0">Welkom terug!</v-card-title>
        </router-link>
        <v-card-subtitle class="mb-4 mt-2">Log in om verder te gaan met je account.</v-card-subtitle>

        <v-form class="mt-8">
            <v-text-field
                label="Gebruikersnaam"
                type="text"
                v-model="this.username"
                :error="this.hasUsernameError"
                :error-messages="this.hasUsernameError ? 'Vul je gebruikersnaam in' : ''"
                class="mb-4"
            />
            <v-text-field
                label="Wachtwoord"
                type="password"
                v-model="this.password"
                :error="this.hasPasswordError"
                :error-messages="this.hasPasswordError ? 'Vul je wachtwoord in' : ''"
                class="mb-4"
            />
            <v-btn
                color="primary"
                class="mt-4"
                @click="login()"
            >
            Login
            </v-btn>
        </v-form>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            hasUsernameError: false,
            password: '',
            hasPasswordError: false,
        }
    },
    methods: {
        // Loginfunctie met eenvoudige validatie van invoer
        login() {
            this.hasUsernameError = !this.username;
            this.hasPasswordError = !this.password;

            // Alleen doorgaan als er invoer is
            if (!this.hasUsernameError && !this.hasPasswordError) {
                this.$router.push('/');
            }
        }
    }
}
</script>
