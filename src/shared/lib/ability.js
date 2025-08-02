import { AbilityBuilder, createMongoAbility } from '@casl/ability';
import defineAclRules from '../constants/aclRules.constants';

// Function to create abilities based on user role
export function defineAbilitiesFor(role) {
  const { can, rules } = new AbilityBuilder(createMongoAbility);

  // Get permissions for the role, default to guest if role is invalid
  const permissions = defineAclRules[role] || defineAclRules.guest;

  // Define route access
  permissions.routes.forEach((route) => {
    can('access', route);
  });

  // Define action permissions
  permissions.actions.forEach((action) => {
    can('perform', action);
  });

  return createMongoAbility(rules);
}
