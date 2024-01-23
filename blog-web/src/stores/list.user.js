import { defineStore } from "pinia";
import { ref } from "vue";
import * as userApi from "@/services/axios/UsersApi.js";

export const useUserStore = defineStore("user", () => {
  const users = ref([]);
  
  const getUsers = async () => {
    try {
      const res = await userApi.listUser({});
      users.value = res;
    } catch (error) {
      console.error(error);
    }
  };
  
  return {
    users,
    getUsers
  }
});