import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import guest from "@/middleware/guest";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutUs.vue"),
  },
  {
    path: "/transactions",
    name: "Transactions",
    component: () =>
      import(
        /* webpackChunkName: "Transactions" */ "../views/Transactions.vue"
      ),
    meta: { requiresAuth: true },
  },
  {
    path: "/transactions/:id",
    name: "SingleProject",
    component: () =>
      import(
        /* webpackChunkName: "singleProject" */ "@/components/Transactions/SingleProject.vue"
      ),
  },
  {
    path: "/dealers",
    name: "Dealers",
    component: () =>
      import(/* webpackChunkName: "Dealers" */ "@/views/Dealers.vue"),
    props: true,
  },

  {
    path: "/contact-us",
    name: "ContactUs",
    component: () =>
      import(/* webpackChunkName: "ContactUs" */ "../views/ContactUs.vue"),
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "SignUp" */ "../views/SignUp.vue"),
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: () =>
      import(/* webpackChunkName: "SignIn" */ "../views/SignIn.vue"),
  },

  {
    path: "/forget-password",
    name: "ForgetPassword",
    component: () =>
      import(
        /* webpackChunkName: "ForgetPassword" */ "../views/ForgetPassword.vue"
      ),
  },
  {
    path: "/check-code",
    name: "CheckCode",
    component: () =>
      import(/* webpackChunkName: "CheckCode" */ "../views/CheckCode.vue"),
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: () =>
      import(
        /* webpackChunkName: "ResetPassword" */ "../views/ResetPassword.vue"
      ),
  },
  {
    path: "/add-transfer",
    name: "AddTransfer",
    component: () =>
      import(/* webpackChunkName: "AddTransfer" */ "../views/AddTransfer.vue"),
  },
  {
    path: "/transactions/:id/edit-transfer",
    name: "EditTransfer",
    component: () =>
      import(
        /* webpackChunkName: "EditTransfer" */ "../views/EditTransfer.vue"
      ),
  },

  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "sign-up" */ "../views/Profile.vue"),
  },

  {
    path: "/404",
    alias: "*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "sign-up" */ "@/views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});
// { path: '*', component: NotFoundComponent }
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!localStorage.getItem("token")) {
      next({
        name: "SignIn",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

// beforeEnter() {

// };
// router.beforeEach((to, from, next) => {
//   if ((to.status = 404)) {
//     next("/NotFound");
//   }
//   if (!to.matched.length) {
//     next("/NotFound");
//   } else {
//     next();
//   }
// });
export default router;
