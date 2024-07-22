import { createRouter, createWebHistory } from "vue-router";
import admin from "./admin.js";
import authRouter from "./auth.js";

const routes = [...admin, ...authRouter];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
