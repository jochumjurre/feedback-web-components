<template>
    <v-card class="rounded-lg pa-4">
        <router-link to="/" class="d-flex align-center navigation">
            <v-icon>mdi-chevron-left</v-icon>
            <v-card-title class="text-h5 mb-0 pa-0">Instellingen</v-card-title>
        </router-link>
        <v-card-subtitle class="mb-4 mt-2">Beheer je account en app-voorkeuren</v-card-subtitle>

        <v-form>
            <!-- Accountgegevens -->
            <v-text-field
                label="Naam inspecteur"
                v-model="localSettings.account.name"
                outlined
                class="mb-4"
            />
            <v-text-field
                label="E-mail"
                v-model="localSettings.account.email"
                outlined
                class="mb-4"
                type="email"
            />

            <!-- Avatar upload -->
            <v-file-input
                label="Profielfoto uploaden"
                v-model="localSettings.account.avatar"
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
                :error="hasError"
                :error-messages="hasError ? 'De wachtwoorden komen niet overeen' : ''"
            />
            <v-text-field
                label="Bevestig wachtwoord"
                v-model="this.localSettings.account.passwordConfirm"
                type="password"
                outlined
                class="mb-4"
                autocomplete="new-password"
                :error="hasError"
                :error-messages="hasError ? 'De wachtwoorden komen niet overeen' : ''"
            />

            <!-- Voorkeuren -->
            <v-switch
                label="Donkere modus"
                v-model="localSettings.preferences.darkMode"
                class="mb-4"
            />
            <v-switch
                label="Meldingen tonen"
                v-model="localSettings.preferences.notifications"
                class="mb-4"
            />
            <v-switch
                label="Geluid aan"
                v-model="localSettings.preferences.sound"
                class="mb-4"
                :disabled="!localSettings.preferences.notifications"
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
                    darkMode: false,
                    notifications: false,
                    sound: false,
                },
            }
        }
    },
    created() {
        this.settingsStore = useSettingsStore()
        this.localSettings.account.name = this.settingsStore.account.name;
        this.localSettings.account.email = this.settingsStore.account.email;
        this.localSettings.account.avatar = this.settingsStore.account.avatar;
        this.localSettings.preferences.darkMode = this.settingsStore.preferences.darkMode;
        this.localSettings.preferences.notifications = this.settingsStore.preferences.notifications;
        this.localSettings.preferences.sound = this.settingsStore.preferences.sound;
    },
    methods: {
        saveSettings() {
            if (this.localSettings.account.password !== this.localSettings.account.passwordConfirm) {
                this.hasError = true;
                this.localSettings.account.password = '';
                this.localSettings.account.passwordConfirm = '';
                return
            }

            this.hasSavedSettings = true;
            setTimeout(()=>{
                this.hasSavedSettings = false;
            }, 2000);

            this.settingsStore.account.name = this.localSettings.account.name;
            this.settingsStore.account.email = this.localSettings.account.email;
            this.settingsStore.account.avatar = this.localSettings.account.avatar;
            
            if (this.localSettings.account.password) {
                this.settingsStore.account.password = this.localSettings.account.password;
            }

            this.settingsStore.preferences.darkMode = this.localSettings.preferences.darkMode;
            this.settingsStore.preferences.notifications = this.localSettings.preferences.notifications;
            this.settingsStore.preferences.sound = this.localSettings.preferences.sound;

            this.localSettings.account.password = '';
            this.localSettings.account.passwordConfirm = '';
        }
    }
}
</script>
