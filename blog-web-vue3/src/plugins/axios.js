import axios from "axios";
import { ref } from "vue";
import { Cookie } from "@/classes/cookie";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 50000,
});

export const accept = ref("application/json");

axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookie.get("token");

    config.headers["Authorization"] = `Bearer ${token}`;
    config.headers["Accept"] = accept.value;

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    const res = response.data;

    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
