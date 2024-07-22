import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index.js'
import axios from 'axios'
window.axios = axios;

import Antd from 'ant-design-vue';

import App from './App.vue';

import './static/fontawesome/css/all.min.css';

import 'ant-design-vue/dist/antd.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';

const app = createApp(App);

app.use(createPinia())
.use(router)
.use(Antd)
app.mount('#app');

app.config.globalProperties.$message = message;