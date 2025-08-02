import { createRouter, createWebHistory } from 'vue-router';
import { useAbility } from '../../shared/composables/useAbility';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('/src/pages/home/index.vue'),
    meta: { public: true },
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
    meta: { public: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const ability = useAbility();

  // if (to.meta.public) {
  //   next();
  //   return;
  // }

  const canAccess = ability.value.can('access', to.name);

  if (canAccess) {
    next();
  } else {
    next('/');
  }
});

export default router;
