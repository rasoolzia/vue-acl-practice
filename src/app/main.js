import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styles/global.css';
import { abilitiesPlugin } from '@casl/vue';
import { useAbility } from '../shared/composables/useAbility';

const  ability  = useAbility();

const app = createApp(App);

app.use(abilitiesPlugin, ability.value, { useGlobalProperties: true });

app.use(router);

app.mount('#app');
