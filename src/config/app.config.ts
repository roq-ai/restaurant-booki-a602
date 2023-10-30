interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read restaurant information',
    'Read user information',
    'Update own user information',
    'Read restaurant menus',
  ],
  ownerAbilities: [
    'Manage restaurant information',
    'Create menus for the restaurant',
    'Manage bookings',
    'Edit personal info',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/49159b7e-de81-4d3b-9666-999487e82195',
};
