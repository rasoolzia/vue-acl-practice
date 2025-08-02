import { computed, reactive } from 'vue';
import defineAclRules from '../constants/aclRules.constants';

const user = reactive({
  role: 'user',
});

export function useAbility() {
  const abilities = computed(
    () => defineAclRules[user.role] || defineAclRules['guest'],
  );

  const canAccess = (route) => {
    return abilities.value.routes.includes(route);
  };

  const canPerform = (action) => {
    return abilities.value.actions.includes(action);
  };

  return { canAccess, canPerform };
}
