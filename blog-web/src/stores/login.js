import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import * as AuthApi from "@/services/axios/AuthApi.js";
import router  from "@/router/index.js";

export const useUserStoreLogin = defineStore("user", () => {
  // const users = reactive({
  //   email: '',
  //   password: '',
  // });

  const login = async (params) => {
    try {
      const res = await AuthApi.login(params);
      if (res && res.token) {
        localStorage.setItem('token', res.token);
        router.push({ path: '/' });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    // users,
    login
  }
});