import Login from "@/views/Auth/Login.vue";
import { PATHS } from "@/constants/path";

const authRouter = [
  {
    path: PATHS.AUTH.LOGIN,
    component: () => Login,
  },
  {
    path: PATHS.AUTH.LOGIN_CENTER,
    component: () => LoginCenter,
  },
];

export default authRouter;
