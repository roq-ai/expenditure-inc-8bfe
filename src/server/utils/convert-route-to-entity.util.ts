const mapping: Record<string, string> = {
  expenditures: 'expenditure',
  incomes: 'income',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
