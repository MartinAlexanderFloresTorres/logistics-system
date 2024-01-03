import { Message } from '../app/shared/interfaces';

export const PAGE_PATHS = {
  ALL: '**',
  NOT_FOUND: 'not-found',
  // AUTH PAGES
  AUTH: {
    PATH: 'auth',
    LOGIN: 'login',
  },
  // DASHBOARD PAGES
  DASHBOARD: {
    PATH: 'dashboard',
    DASHBOARD: '',
  },

  // ADMIN PAGES
  ADMIN: {
    PATH: 'admin',
  },

  // ADMIN  CATEGORIES PAGES
  CATEGORIES: {
    INDEX: '',
    PATH: 'categories',
    LIST: 'list',
    CREATE: 'create',
    EDIT: 'edit',
  },
  // ADMIN COST CENTERS PAGES
  COST_CENTERS: {
    INDEX: '',
    PATH: 'cost-centers',
    LIST: 'list',
    CREATE: 'create',
    EDIT: 'edit',
  },
  // ADMIN BRANDS PAGES
  BRANDS: {
    INDEX: '',
    PATH: 'brands',
    LIST: 'list',
    CREATE: 'create',
    EDIT: 'edit',
  },
  // ADMIN  PRODUCTS PAGES
  PRODUCTS: {
    INDEX: '',
    PATH: 'products',
    LIST: 'list',
    CREATE: 'create',
    EDIT: 'edit',
  },
  // ADMIN SUPPLIERS PAGES
  SUPPLIERS: {
    INDEX: '',
    PATH: 'suppliers',
    LIST: 'list',
    CREATE: 'create',
    EDIT: 'edit',
  },
  // ADMIN UNITS PAGES
  UNITS: {
    INDEX: '',
    PATH: 'units',
    LIST: 'list',
    CREATE: 'create',
    EDIT: 'edit',
  },

  // KARDEX PAGES
  KARDEX: {
    INDEX: '',
    PATH: 'kardex',
    LIST: 'list',
    CREATE: 'create',
    EDIT: 'edit',
  },
  // PURCHASE ORDERS PAGES
  PURCHASE_ORDERS: {
    INDEX: '',
    PATH: 'purchase-orders',
    LIST: 'list',
    CREATE: 'create',
    EDIT: 'edit',
  },
  // PURCHASE SERVICES PAGES
  PURCHASE_SERVICES: {
    INDEX: '',
    PATH: 'purchase-services',
    LIST: 'list',
    CREATE: 'create',
    EDIT: 'edit',
  },
  // VOUCHER ENTRIES PAGES
  VOUCHER_ENTRIES: {
    INDEX: '',
    PATH: 'voucher-entries',
    LIST: 'list',
    CREATE: 'create',
    EDIT: 'edit',
  },
  // VOUCHER OUTPUTS PAGES
  VOUCHER_OUTPUTS: {
    INDEX: '',
    PATH: 'voucher-outputs',
    LIST: 'list',
    CREATE: 'create',
    EDIT: 'edit',
  },
  // REPORTS PAGES
  REPORTS: {
    INDEX: '',
    PATH: 'reports',
    PURCHASE_ORDERS: 'purchase-orders',
    PURCHASE_SERVICES: 'purchase-services',
    VOUCHER_OUTPUTS: 'voucher-outputs',
  },
  // SECURITY PAGES
  SECURITY: {
    INDEX: '',
    PATH: 'security',
    USERS: 'users',
  },
};

export const DEFAULT_MESSAGE: Message = {
  type: null,
  message: null,
};
