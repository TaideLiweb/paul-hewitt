import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/',
        name: 'Index',
        component: () => import('../views/Index.vue'),
      },
      {
        path: '/products',
        name: 'Products',
        component: () => import('../views/Products.vue'),
      },
      {
        path: '/product/:id',
        name: 'Product',
        component: () => import('../views/Product.vue'),
      },
      {
        path: '/checkout',
        name: 'Checkout',
        component: () => import('../views/Checkout.vue'),
      },
    ],
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../views/dashboard/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/dashboard/Products.vue'),
      },
      {
        path: 'coupon',
        name: 'coupon',
        component: () => import('../views/dashboard/Coupon.vue'),
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('../views/dashboard/Order.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/dashboard/Login.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
