import Login from "@/views/Auth/Login.vue";
import { PATHS } from "@/constants/path";

const authRouter = [
  {
    path: PATHS.AUTH.LOGIN,
    component: () => Login,
  },
];

export default authRouter;
