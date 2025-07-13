import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('/src/pages/home/index.vue'),
  },
  {
    path: '/todo',
    name: 'Todo',
    component: () => import('/src/pages/todo/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
