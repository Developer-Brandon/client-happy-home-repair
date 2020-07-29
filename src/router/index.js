import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Products from '../views/Products.vue';
// import About from '../views/About.vue';
// import Inquiry from '../views/Inquiry.vue';
// import Notice from '../views/Notice.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Products',
    name: 'Products',
    component: Products,
  },
  {
    path: '/About',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
