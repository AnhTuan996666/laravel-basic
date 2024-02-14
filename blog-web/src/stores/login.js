import { defineStore } from "pinia";
import { reactive } from "vue";
import * as AuthApi from "@/services/axios/AuthApi.js";

export const useAuthStore = defineStore("user", () => {
  const users = reactive({
    userItem: [],
  });
  
  const getUser = async (email, password ) => {
    try {
      const res = await AuthApi.login({email, password});
      users.userItem = res;
    } catch (error) {
      console.error(error);
    }
  };
  
  return {
    users,
    getUser
  }
});