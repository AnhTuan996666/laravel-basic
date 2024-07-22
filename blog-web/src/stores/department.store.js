import { reactive } from "vue";
import { defineStore } from "pinia";
import * as userApi from "@/services/axios/UsersApi.js";

export const useDepartment = defineStore("user", () => {
  const departments = reactive({value: []});
  
  const getDepartment = async () => {
    try {
      const res = await userApi.listDepartments({});
      departments.value = res.data.map((department) => ({
        value: department.id,
        label: department.name,
      }));
    } catch (error) {
      console.error(error);
    }
  };



  return {
    getDepartment,
    departments
  }
});
