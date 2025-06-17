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
      darkMode: false,
      notifications: true,
      sound: true,
    }
  }),
  actions: {
    updateAccount(newAccount) {
      this.account = { ...this.account, ...newAccount };
    },
    updatePreferences(newPreferences) {
      this.preferences = { ...this.preferences, ...newPreferences };
    },
    resetPassword() {
      this.account.password = '';
    }
  },
  getters: {
    isDarkMode: (state) => state.preferences.darkMode,
    notificationsEnabled: (state) => state.preferences.notifications,
  }
});
