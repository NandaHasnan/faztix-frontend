import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: "",
  }),

  actions: {
    login(token) {
      this.token = token;
    },

    logout() {
      this.$reset(); // Mengembalikan state ke nilai awal
    },
  },
});
