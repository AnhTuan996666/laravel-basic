import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index.js'
import axios from 'axios'
window.axios = axios;

import {
    Form,
    Input,
    Checkbox,
    Switch,
    InputPassword,
    Select,
    Avatar,
    Table,
    Card,
    Menu,
    List,
    Drawer, 
    Button,
    message 
} from 'ant-design-vue';

import App from './App.vue';

import './static/fontawesome/css/all.min.css';

import 'ant-design-vue/dist/antd.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';

const app = createApp(App);

app.use(createPinia())
.use(router)
.use(Input)
.use(InputPassword)
.use(Select)
.use(Avatar)
.use(Table)
.use(Checkbox)
.use(Card)
.use(Switch)
.use(Menu)
.use(List)
.use(Button)
.use(Drawer)
.use(Form);
app.mount('#app');

app.config.globalProperties.$message = message;