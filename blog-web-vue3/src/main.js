import { createApp } from "vue";
import ElementPlus from "element-plus";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createPinia } from "pinia";
import i18n from "@/i18n.js";
import "./style.scss";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia).use(i18n).use(ElementPlus).mount("#app");
