import { defineStore } from "pinia";
import * as AuthApi from "@/services/axios/AuthApi.js";

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: null,
    token: null,
  }),
  actions: {
    async login(email, password) {
      try {
        const res = await AuthApi.login({email, password});
        console.log(res, 123123);
        // this.token = res.data.token;
      } catch (error) {
        console.error(error);
      }
    },
  },
});