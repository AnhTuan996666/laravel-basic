import UsersList from "@/pages/admin/users/index.vue";
import UsersCreate from "@/pages/admin/users/create.vue";
import UsersRoles from "@/pages/admin/roles/index.vue";
import UsersSettings from "@/pages/admin/settings/index.vue";

//login
import Login from "../pages/login/index.vue";

const admin = [
    {
        path: "/admin",
        component: () => import("../layouts/admin.vue"),
        children: [
            {
                path: "users",
                name: "admin-users",
                component: () => UsersList
            },
            {
                path: "users/create",
                name: "admin-users-create",
                component: () => UsersCreate
            },
            {
                path: "roles",
                name: "admin-roles",
                component: () => UsersRoles
            },

            {
                path: "settings",
                name: "admin-settings",
                component: () => UsersSettings
            }
        ]
    },
    {
        path: "/login",
        component: () => Login,
    }
];

export default admin;