const ENDPOINT = {
  AUTH: {
    LOGIN: "/login",
    LOGIN_CENTER: "/login-center",
    LOGOUT: "/logout",
    CURRENT_USER: "/current-user",
  },
  DIRECTORY: {
    LIST: "/directories",
    CREATE: "/directories",
    DELETE: (id) => `/directories/${id}`,
    UPDATE: (id) => `/directories/${id}`,
  },
  TIMESHEET: {
    LIST: "/timesheets",
    DETAIL: (id) => `/timesheets/${id}`,
    UPDATE: "/timesheets",
  },
  TIMESHEET_DETAIL: {
    LIST: (timesheetId) => `/timesheet-details/${timesheetId}`,
    STORE: "/timesheet-details",
  },
  FILE: {
    LIST: "/files",
    UPLOAD: "/files",
    DELETE: "/files/delete",
    DOWNLOAD: "/files/download",
  },
  FUNCTION: {
    LIST: "functions",
  },
  ADMIN: {
    ACTION: {
      LIST: "admin/actions",
      CREATE: "admin/actions",
      UPDATE: "admin/actions",
      DELETE: (id) => `admin/actions/${id}`,
    },
    FUNCTION: {
      SETTING: "admin/functions/setting",
      SAVE_SETTING: "admin/functions/setting/save",
      CREATE_PERMISSION: "admin/functions/role-permission",
    },
    ROLE: {
      LIST: "admin/roles",
      DELETE: (id) => `admin/roles/${id}`,
      UPDATE: "admin/roles",
    },
    USER: {
      LIST: "admin/users",
      CREATE: "admin/users",
      DETAIL: (id) => `admin/users/${id}`,
    },
  },
  FUNCTION_GROUP: {
    LIST: "/function-groups",
  },
  DEPARTMENT: {
    LIST: "/departments",
    CREATE: "/departments",
    LIST_ITEM: (id) => `/departments/${id}`,
    DELETE: (id) => `/departments/${id}`,
    UPDATE: (id) => `/departments/${id}`,
  },
  OVERTIME: {
    LIST: "/requests",
    CREATE: "/requests",
    DELETE: (id) => `/requests/${id}`,
    UPDATE: (id) => `/requests/${id}`,
  },
  LOCATION: {
    LIST: "/locations",
    CREATE: "/locations",
    LIST_ITEM: (id) => `/locations/${id}`,
    RESTORE: (id) => `/locations/restore/${id}`,
    DELETE: (id) => `/locations/${id}`,
    DELETE_FORCE: (id) => `/locations/force-delete/${id}`,
    UPDATE: (id) => `/locations/${id}`,
  },
  REQUEST: {
    APPROVAL: {
      LIST: "requests/approval",
    },
  },
};

export default ENDPOINT;
