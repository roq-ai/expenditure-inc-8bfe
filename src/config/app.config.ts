interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Construction Manager'],
  customerRoles: [],
  tenantRoles: ['Construction Manager', 'Accountant'],
  tenantName: 'Organization',
  applicationName: 'Expenditure& income management ',
  addOns: ['notifications', 'file'],
};
