import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      auth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login"),
    meta: {
      auth: false,
    },
  },
  {
    path: "/mainpage",
    name: "MainPage",
    component: () => import("../views/MainPage"),
    meta: {
      auth: true,
    },
  },
  {
    path: "/userprofile",
    name: "UserProfile",
    component: () => import("../views/UserProfile"),
    meta: {
      auth: true,
    },
  },
  {
    path: '/userpage/:userId',
    name: 'UserPage',
    props: true,
    component: () => import('../views/UserPage'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/chat/:chatId',
    name: 'Chat',
    props: true,
    component: () => import('../views/ChatPage'),
    meta: {
      auth:true,
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.auth)) {
    if (
      !localStorage.getItem("token") ||
      localStorage.getItem("token") === null
    ) {
      next({ name: "Login" });
    }
    next();
  } else {
    next();
  }
});

export default router;
