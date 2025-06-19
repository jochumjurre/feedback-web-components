<template>
    <section>
        <ContentHeader
            :title="'Instellingen'"
            :description="'Beheer je account en app-voorkeuren.'"
        />

        <v-card class="rounded-lg pa-4 mt-6">
            <v-form>
                <!-- Accountgegevens -->
                <v-text-field
                    v-model="this.localSettings.account.name"
                    label="Naam inspecteur"
                    class="mb-4"
                />
                <v-text-field
                    v-model="this.localSettings.account.email"
                    label="E-mail"
                    type="email"
                    class="mb-4"
                />

                <!-- Avatar upload -->
                <v-file-input
                    v-model="this.localSettings.account.avatar"
                    label="Profielfoto uploaden"
                    accept="image/*"
                    class="mb-4"
                    prepend-icon="mdi-camera"
                    show-size
                />

                <!-- Wachtwoord wijzigen -->
                <v-text-field
                    v-model="this.localSettings.account.password"
                    label="Nieuw wachtwoord"
                    type="password"
                    class="mb-4"
                    :error="this.hasPasswordError"
                    :error-messages="this.hasPasswordError ? 'De wachtwoorden komen niet overeen' : ''"
                />
                <v-text-field
                    v-model="this.localSettings.account.passwordConfirm"
                    label="Bevestig wachtwoord"
                    type="password"
                    class="mb-4"
                    :error="this.hasPasswordError"
                    :error-messages="this.hasPasswordError ? 'De wachtwoorden komen niet overeen' : ''"
                />

                <!-- Voorkeuren -->
                <v-switch
                    v-model="this.localSettings.preferences.isDarkMode"
                    label="Donkere modus"
                    class="mb-4"
                />
                <v-switch
                    v-model="this.localSettings.preferences.notifications"
                    label="Meldingen tonen"
                    class="mb-4"
                />
                <v-switch
                    v-model="this.localSettings.preferences.isSoundOn"
                    label="Geluid aan"
                    class="mb-4"
                    :disabled="!this.localSettings.preferences.notifications"
                />

                <v-btn
                    color="primary"
                    @click="saveSettings"
                >
                    Instellingen opslaan
                </v-btn>
                <p
                    v-show="this.hasSavedSettings"
                    class="mt-2"
                >
                    Instellingen opgeslagen!
                </p>
            </v-form>
        </v-card>
    </section>
</template>

<script>
import { useSettingsStore } from '@/stores/settingsStore.js'

export default {
    name: 'SettingsPage',
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
