import User from "../page/admin/user/index.vue";

const admin = [
    {
        path: '/admin',
        component: () => import("../layouts/admin.vue"),
        children: [
            {
                path: "users",
                name: "admin-user",
                component: User
            }
        ]
    }
]

export default admin;