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
        isDarkMode(state) {
            return state.preferences.isDarkMode;
        },
    }
});
