import { createWebHistory, createRouter } from "vue-router";
import Home from './views/Home.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/todos',
    component: () => import('./views/Todos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;