import Normal from "@/layouts/NormalLayout.vue";
import NotFound from "@/layouts/common/NotFound.vue";
import Dashboard from "@/views/Admin/Dashboard.vue";
import { PATHS } from "@/constants/path";

const Router = [
  {
    path: "/:pathMatch(.*)*",
    component: () => NotFound,
  },
  {
    path: PATHS.ADMIN,
    component: () => Normal,
    children: [
      {
        path: PATHS.USER,
        name: "admin-users",
        component: () => Dashboard,
      },
      {
        path: PATHS.DASHBOARD,
        name: "admin-dashboard",
        component: () => Dashboard,
      },
    ],
  },
  {
    path: PATHS.USER,
    component: () => Dashboard,
    children: [],
  },
];

export default Router;
