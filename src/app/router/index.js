import { createRouter, createWebHistory } from 'vue-router';
import { useAbility } from '@/shared/composables/useAbility';

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
  {
    path: '/fund',
    name: 'Fund',
    component: () => import('@/pages/fund/fund-list/ui/fund-list.page.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const { canAccess } = useAbility();

  if (!canAccess(to.name)) {
    return next('/'); // or a 403 page
  }

  next();
});

export default router;
