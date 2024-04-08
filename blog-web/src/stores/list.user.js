import { reactive } from "vue";
import { defineStore } from "pinia";
import * as userApi from "@/services/axios/UsersApi.js";

export const useUserStore = defineStore("user", () => {
  const users = reactive({value: []});
  
  const getUsers = async () => {
    try {
      const res = await userApi.listUser({});
      users.value = res;

    } catch (error) {
      console.error(error);
    }
  };

  const changeStatusUsers = async (id, newStatus) => {
    try {
      const res = await userApi.changeStatus(id, newStatus);
      await getUsers();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    users,
    getUsers,
    changeStatusUsers
  }
});
