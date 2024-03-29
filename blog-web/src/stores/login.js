import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import * as AuthApi from "@/services/axios/AuthApi.js";

export const useUserStoreLogin = defineStore("user", () => {
  const users = reactive({
    email: '',
    password: '',
    token: '',
  });

  const login = async (params) => {
    try {
      const res = await AuthApi.login(params);
      users.token =  res.data.token;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    users,
    login
  }
});