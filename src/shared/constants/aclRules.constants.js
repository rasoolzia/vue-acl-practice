const defineAclRules = {
  admin: {
    routes: ['Home', 'Todo', 'Fund'],
    actions: ['FundList', 'FundAdd', 'FundFilter', 'FundDelete'],
  },
  user: {
    routes: ['Home', 'Todo', 'Fund'],
    actions: ['FundList', 'FundAdd'],
  },
  guest: {
    routes: ['Home', 'Fund'],
    actions: [],
  },
};

export default defineAclRules;
