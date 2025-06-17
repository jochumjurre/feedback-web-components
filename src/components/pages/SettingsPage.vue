<template>
    <v-card class="rounded-lg pa-4 mt-6">
        <router-link to="/" class="d-flex align-center navigation">
            <v-icon>mdi-chevron-left</v-icon>
            <v-card-title class="text-h5 mb-0 pa-0">Instellingen</v-card-title>
        </router-link>
        <v-card-subtitle class="mb-4 mt-2">Beheer je account en app-voorkeuren</v-card-subtitle>

        <v-form>
            <!-- Accountgegevens -->
            <v-text-field
                label="Naam inspecteur"
                v-model="this.localSettings.account.name"
                outlined
                class="mb-4"
            />
            <v-text-field
                label="E-mail"
                v-model="this.localSettings.account.email"
                outlined
                class="mb-4"
                type="email"
            />

            <!-- Avatar upload -->
            <v-file-input
                label="Profielfoto uploaden"
                v-model="this.localSettings.account.avatar"
                accept="image/*"
                outlined
                class="mb-4"
                prepend-icon="mdi-camera"
                show-size
            />

            <!-- Wachtwoord wijzigen -->
            <v-text-field
                label="Nieuw wachtwoord"
                v-model="this.localSettings.account.password"
                type="password"
                outlined
                class="mb-4"
                autocomplete="new-password"
                :error="this.hasPasswordError"
                :error-messages="this.hasPasswordError ? 'De wachtwoorden komen niet overeen' : ''"
            />
            <v-text-field
                label="Bevestig wachtwoord"
                v-model="this.localSettings.account.passwordConfirm"
                type="password"
                outlined
                class="mb-4"
                autocomplete="new-password"
                :error="this.hasPasswordError"
                :error-messages="this.hasPasswordError ? 'De wachtwoorden komen niet overeen' : ''"
            />

            <!-- Voorkeuren -->
            <v-switch
                label="Donkere modus"
                v-model="this.localSettings.preferences.isDarkMode"
                class="mb-4"
            />
            <v-switch
                label="Meldingen tonen"
                v-model="this.localSettings.preferences.notifications"
                class="mb-4"
            />
            <v-switch
                label="Geluid aan"
                v-model="this.localSettings.preferences.isSoundOn"
                class="mb-4"
                :disabled="!this.localSettings.preferences.notifications"
            />

            <v-btn color="primary" @click="saveSettings">Instellingen opslaan</v-btn>
            <p v-show="this.hasSavedSettings" class="mt-2">Instellingen opgeslagen!</p>
        </v-form>
    </v-card>
</template>

<script>
import { useSettingsStore } from '@/stores/settingsStore.js'

export default {
    data() {
        return {
            hasPasswordError: false,
            hasSavedSettings: false,
            localSettings: {
                account: {
                    name: '',
                    email: '',
                    avatar: null,
                    password: '',
                    passwordConfirm: '',
                },
                preferences: {
                    isDarkMode: false,
                    notifications: false,
                    isSoundOn: false,
                },
            }
        }
    },
    created() {
        // Pinia store instellen en lokale variabelen vullen met gegevens uit de store.
        this.settingsStore = useSettingsStore()
        this.localSettings.account.name = this.settingsStore.account.name;
        this.localSettings.account.email = this.settingsStore.account.email;
        this.localSettings.account.avatar = this.settingsStore.account.avatar;
        this.localSettings.preferences.isDarkMode = this.settingsStore.preferences.isDarkMode;
        this.localSettings.preferences.notifications = this.settingsStore.preferences.notifications;
        this.localSettings.preferences.isSoundOn = this.settingsStore.preferences.isSoundOn;
    },
    methods: {
        saveSettings() {
            // Controleer of wachtwoorden overeenkomen
            if (this.localSettings.account.password !== this.localSettings.account.passwordConfirm) {
                this.this.hasPasswordError = true;
                this.localSettings.account.password = '';
                this.localSettings.account.passwordConfirm = '';
                return
            }

            // Verberg bevestiging na 2 seconden
            this.hasSavedSettings = true;
            setTimeout(()=>{
                this.hasSavedSettings = false;
            }, 2000);

            // Instellingen doorgeven aan de store
            this.settingsStore.account.name = this.localSettings.account.name;
            this.settingsStore.account.email = this.localSettings.account.email;
            this.settingsStore.account.avatar = this.localSettings.account.avatar;
            if (this.localSettings.account.password) {
                this.settingsStore.account.password = this.localSettings.account.password;
            }
            this.settingsStore.preferences.isDarkMode = this.localSettings.preferences.isDarkMode;
            this.settingsStore.preferences.notifications = this.localSettings.preferences.notifications;
            this.settingsStore.preferences.isSoundOn = this.localSettings.preferences.isSoundOn;
            
            // Wachtwoordvelden leegmaken na opslaan
            this.localSettings.account.password = '';
            this.localSettings.account.passwordConfirm = '';
        }
    }
}
</script>
