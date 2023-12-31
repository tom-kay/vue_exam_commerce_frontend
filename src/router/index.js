import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";
import Cart from "@/pages/Cart.vue";
import Order from "@/pages/Order.vue";
import Orders from "@/pages/Orders.vue";

// 라우터 설계
const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/cart", component: Cart },
  { path: "/order", component: Order },
  { path: "/orders", component: Orders },
];

// 라우터 생성
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 라우터 추출 (main.js에서 import)
export { router };
