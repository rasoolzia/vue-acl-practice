import { computed, reactive } from 'vue';
import { defineAbilitiesFor } from '../lib/ability';

const user = reactive({
  role: 'user',
});

export function useAbility() {
  const ability = computed(() => defineAbilitiesFor(user.role));
  return ability;
}
