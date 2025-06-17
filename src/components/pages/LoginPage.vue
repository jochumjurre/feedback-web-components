<template>
    <v-card class="rounded-lg pa-4 mt-6">
        <router-link to="/" class="d-flex align-center navigation">
            <v-icon>mdi-chevron-left</v-icon>
            <v-card-title class="text-h5 mb-0 pa-0">Welkom terug!</v-card-title>
        </router-link>
        <v-card-subtitle class="mb-4 mt-2">Log in om verder te gaan met je account.</v-card-subtitle>

        <v-form class="mt-8">
            <v-text-field
                label="Email"
                type="email"
                v-model="this.email"
                :error="this.hasEmailError"
                :error-messages="this.hasEmailError ? 'Vul je email in' : ''"
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
            email: '',
            hasEmailError: false,
            password: '',
            hasPasswordError: false,
        }
    },
    methods: {
        // Probeer in te loggen (of toon foutmeldingen als er geen gegevens zijn ingevuld)
        login() {
            this.hasEmailError = !this.email;
            this.hasPasswordError = !this.password;

            if (!this.hasEmailError && !this.hasPasswordError) {
                this.$router.push('/');
            }
        }
    }
}
</script>
