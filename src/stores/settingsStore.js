import { defineStore } from "pinia";

export const useSettingsStore = defineStore('settings', {
    state: () => ({
        account: {
            name: 'John Doe',
            email: 'john@example.com',
            avatar: null,
            password: '',
        },
        preferences: {
            isDarkMode: false,
            notifications: true,
            isSoundOn: true,
        }
    }),
    getters: {
        // Geef terug of darkmode ingeschakeld is
        isDarkMode(state) {
            return state.preferences.isDarkMode;
        },
    }
});
