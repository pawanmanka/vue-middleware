import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import auth  from './middleware/auth'
import directorRole  from './middleware/directorRole';
import  middlewarePipeline from './middleware/middleware-pipeline';

import store from "../store/index";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresLogin: false ,        
    }
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
    import("../views/Contact.vue"),
    meta: {
      requiresLogin: false ,        
    }
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),
    meta: {
      requiresLogin: true ,
        middleware: [
          auth,
          directorRole
        ]
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  //   if (to.matched.some(record => record.meta.requiresLogin)) {    
  //     next("/Login")
  // } else {
  //     next()
  // }
  if (!to.meta.middleware) {
      return next()
  }
  const middleware = to.meta.middleware;  
  const context = {
      to,
      from,
      next,
      store
  }
  
  // return middleware[0]({
  //     ...context
  // })
  return middleware[0]({
    ...context,
    next:middlewarePipeline(context, middleware,1)
  })
})


export default router;
