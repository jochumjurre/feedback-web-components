<template>
    <v-card class="rounded-lg pa-4 mt-6">
        <div v-if="!hasStartedAuth">
            <router-link to="/" class="d-flex align-center navigation">
                <v-icon icon="mdi-chevron-left" />
                <v-card-title class="text-h5 mb-0 pa-0">Welkom terug!</v-card-title>
            </router-link>
            <v-card-subtitle class="mb-4 mt-2">Log in om verder te gaan met je account.</v-card-subtitle>

            <v-form class="mt-8">
                <v-text-field
                    v-model="this.username"
                    label="Gebruikersnaam"
                    type="text"
                    :error="this.hasUsernameError"
                    :error-messages="this.hasUsernameError ? 'Vul je gebruikersnaam in' : ''"
                    class="mb-4"
                />
                <v-text-field
                    v-model="this.password"
                    label="Wachtwoord"
                    type="password"
                    :error="this.hasPasswordError"
                    :error-messages="this.hasPasswordError ? 'Vul je wachtwoord in' : ''"
                    class="mb-4"
                />
                <v-btn
                    color="primary"
                    class="mt-4"
                    @click="login"
                    block
                >
                    Login
                </v-btn>
            </v-form>
        </div>
        <div v-else>
            <button
                @click="goBack"
                class="d-flex align-center navigation no-style-btn"
            >
                <v-icon icon="mdi-chevron-left" />
                <v-card-title class="text-h5 mb-0 pa-0">Twee-factor-authenticatie</v-card-title>
            </button>
            <v-card-subtitle class="mb-4 mt-2">Voer de 6-cijferige code uit je e-mail in.</v-card-subtitle>
            
            <form class="mt-8 mb-4">
                <v-text-field
                    v-model="this.authCode"
                    label="Authenticatiecode"
                    maxlength="6"
                    counter
                    type="text"
                    class="mb-4"
                    :error="this.hasAuthError"
                    :error-messages="this.hasAuthError ? 'Vul de juiste authenticatiecode in' : ''"
                />

                <v-btn
                    @click="authenticate"
                    color="primary"
                    block
                >
                    Verifiëren
                </v-btn>
            </form>

            <v-btn
                v-if="!this.hasRequestedNewAuthCode"
                @click="this.hasRequestedNewAuthCode = true"
                variant="text"
                block
            >
                Code opnieuw versturen
            </v-btn>
            <v-alert
                v-else
                type="success"
            >
                Code is opnieuw verstuurd naar je e-mailadres.
            </v-alert>
        </div>
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
            hasStartedAuth: false,
            hasRequestedNewAuthCode: false,
            authCode: '',
            hasAuthError: false,
        }
    },
    methods: {
        // Loginfunctie met eenvoudige validatie tegen lege invoer
        login() {
            this.hasUsernameError = !this.username;
            this.hasPasswordError = !this.password;
            if (!this.hasUsernameError && !this.hasPasswordError) {
                this.hasStartedAuth = true;
            }
        },
        // Authenticatiefunctie met eenvoudige validatie tegen lege invoer
        authenticate() {
        this.hasAuthError = false;
        if (this.authCode.length !== 6) {
            this.hasAuthError = true;
            return;
        }
        this.$router.push('/');
        },
        // Ga terugn naar de eerste stap van de login flow
        goBack() {
            this.hasStartedAuth = false;
        }
    }
}
</script>
