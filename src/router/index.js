import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/contactos",
    name: "contactos",

    component: () =>
      import(/* webpackChunkName: "contactos" */ "../views/ContactosView.vue"),
  },
  {
    path: "/Login",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/Dashboard/manifiesto",
    component: () => import("@/views/DashboardAdmin/manifiestoView.vue"),
  },
  {
    path: "/Dashboard",
    component: () => import("@/views/DashboardAdmin/homeView.vue"),
    children: [
      {
        path: "/Dashboard/conductores",
        component: () => import("@/views/DashboardAdmin/ConductoresView.vue"),
      },
      {
        path: "/Dashboard/datosCliente",
        component: () => import("@/views/DashboardAdmin/datosCliente.vue"),
      },
      {
        path: "/Dashboard/datosConductor",
        component: () => import("@/views/DashboardAdmin/datosConductor.vue"),
      },
      {
        path: "/Dashboard/historial",
        component: () => import("@/views/DashboardAdmin/historialView.vue"),
      },
      {
        path: "/Dashboard/pqrs",
        component: () => import("@/views/DashboardAdmin/pqrsView.vue"),
      },
      {
        path: "/Dashboard/solicitudConductores",
        component: () =>
          import("@/views/DashboardAdmin/solicitudConductores.vue"),
      },
      {
        path: "/Dashboard/EditarPerfil",
        component: () => import("@/views/DashboardAdmin/perfilView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
