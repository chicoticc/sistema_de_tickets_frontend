import { createRouter, createWebHistory } from "vue-router";

import LoginView from "../views/LoginView.vue";
import AdminView from "../views/AdminView.vue";
import TecnicoView from "../views/TecnicoView.vue";
import UsuarioView from "../views/UsuarioView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: "/login",
        },
        {
            path: "/login",
            name: "Login",
            component: LoginView,
        },
        {
            path: "/admin",
            name: "Admin",
            component: AdminView,
        },
        {
            path: "/tecnico",
            name: "Tecnico",
            component: TecnicoView,
        },
        {
            path: "/usuario",
            name: "Usuario",
            component: UsuarioView,
        }

    ]
})

export default router;