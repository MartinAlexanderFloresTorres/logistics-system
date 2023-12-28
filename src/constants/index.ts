/*
export const SIDEBAR_ITEMS_TOP: SidebarItem[] = [
  {
    title: 'Inicio',
    icon: <IoHomeOutline />,
    link: '/dashboard',
    roles: [ROLES.ADMIN.value, ROLES.USER.value],
  },
  {
    title: 'Administración',
    link: '/admin',
    icon: <Users />,
    roles: [ROLES.ADMIN.value],
    items: [
      {
        title: 'Categorias',
        link: '/admin/categories/list',
        icon: <Layers3 />,
      },
      {
        title: 'Centros de costo',
        link: '/admin/cost-centers/list',
        icon: <Building2 />,
      },
      {
        title: 'Marcas',
        link: '/admin/brands/list',
        icon: <AlignStartHorizontal />,
      },
      {
        title: 'Productos',
        link: '/admin/products/list',
        icon: <PackageOpen />,
      },
      {
        title: 'Proveedores',
        link: '/admin/suppliers/list',
        icon: <Users2 />,
      },
      {
        title: 'Unidades de medida',
        link: '/admin/units/list',
        icon: <PencilRuler />,
      },
    ],
  },

  {
    title: 'Kardex',
    link: '/kardex/list',
    icon: <ArrowRightLeft />,
    roles: [ROLES.ADMIN.value, ROLES.USER.value],
  },
  {
    title: 'Ordenes de compra',
    link: '/purchase-orders/list',
    icon: <BaggageClaim />,
    roles: [ROLES.ADMIN.value, ROLES.USER.value],
  },
  {
    title: 'Ordenes de servicio',
    link: '/services/list',
    icon: <Car />,
    roles: [ROLES.ADMIN.value, ROLES.USER.value],
  },

  {
    title: 'Vales de entrada',
    link: '/voucher-entries/list',
    icon: <PackagePlus />,
    roles: [ROLES.ADMIN.value, ROLES.USER.value],
  },
  {
    title: 'Vales de salida',
    link: '/voucher-outputs/list',
    icon: <PackageMinus />,
    roles: [ROLES.ADMIN.value, ROLES.USER.value],
  },
  {
    title: 'Reportes',
    link: '/reports',
    icon: <LineChart />,
    roles: [ROLES.ADMIN.value, ROLES.USER.value],
    items: [
      {
        link: '/reports/purchase-orders',
        title: 'Ordenes de compra',
        icon: <BaggageClaim />,
      },
      {
        link: '/reports/purchase-services',
        title: 'Ordenes de servicio',
        icon: <Car />,
      },
      {
        link: '/reports/voucher-outputs',
        title: 'Vales de salida',
        icon: <PackageMinus />,
      },
    ],
  },
  {
    link: '/security',
    title: 'Seguridad',
    icon: <ShieldCheck />,
    roles: [ROLES.ADMIN.value],
    items: [
      {
        link: '/security/users',
        title: 'Usuarios',
        icon: <Users />,
      },
    ],
  },
];

export const SIDEBAR_ITEMS_BOTTOM: SidebarItem[] = [
  {
    title: 'Configuraciónes',
    link: '/account',
    icon: <TbSettingsCog />,
    roles: [ROLES.ADMIN.value, ROLES.USER.value],
    items: [
      {
        title: 'Apariencia',
        link: '/account/settings/display',
        icon: <Layout />,
      },
      {
        title: 'Limites',
        link: '/account/settings/limits',
        icon: <Layers />,
      },
    ],
  },
];

export const SIDEBAR_ITEMS: SidebarNavigation[] = [
  {
    title: 'Paginas',
    navigations: SIDEBAR_ITEMS_TOP,
  },
  {
    title: 'Más',
    navigations: SIDEBAR_ITEMS_BOTTOM,
  },
];

 */

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
