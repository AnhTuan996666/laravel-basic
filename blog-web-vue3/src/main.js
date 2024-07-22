import { createApp } from "vue";
import ElementPlus from "element-plus";
import "@/assets/style/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import App from "@/App.vue";
import { createPinia } from "pinia";
import router from "@/router/index.js";
import i18n from "@/i18n.js";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia).use(i18n).use(router).use(ElementPlus).mount("#app");
