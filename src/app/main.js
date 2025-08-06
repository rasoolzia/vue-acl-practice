import { useAbility } from '@/shared/composables/useAbility';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styles/global.css';

const app = createApp(App);

app.config.globalProperties.$can = (permission = 'access', name = '') => {
  const { canPerform, canAccess } = useAbility();
  if (permission === 'perform') return canPerform(name);
  if (permission === 'access') return canAccess(name);
  return false;
};

app.use(router);
app.mount('#app');
