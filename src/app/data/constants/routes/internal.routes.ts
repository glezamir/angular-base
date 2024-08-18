export const ROUTES_PATHS = {
    AUTH:{
        DEFAULT: 'auth',
        LOGIN: 'login',
    },
    PANEL: {
        DEFAULT: 'panel',
        USER: 'user'
    },
    CRUDS: {
        DEFAULT: 'cruds',
        PRODUCTS: 'products'
    },
    SERVER: {
        E_401: '401',
        E_404: '404',
        E_UERR: 'UERR'
    }
};

export const INTERNAL_PATHS = {
    /**
     * AUTHENTICATION
     */
    AUTH_DEFAULT: `${ROUTES_PATHS.AUTH.DEFAULT}`,
    AUTH_LOGIN: `${ROUTES_PATHS.AUTH.LOGIN}`,
    /**
     * PANEL
     */
    PANEL_DEFAULT: `${ROUTES_PATHS.PANEL.DEFAULT}`,
    PANEL_USER_LIST: `${ROUTES_PATHS.PANEL.USER}`,
    /**
     * CRUDs
     */
    CRUDS_DEFAULT: `${ROUTES_PATHS.CRUDS.DEFAULT}`,
    CRUDS_PRODUCTS: `${ROUTES_PATHS.CRUDS.PRODUCTS}`,
    /**
     * SERVER
     */
    SERVER_E_401: `${ROUTES_PATHS.SERVER.E_401}`,
    SERVER_E_404: `${ROUTES_PATHS.SERVER.E_404}`,
    SERVER_E_UERR: `${ROUTES_PATHS.SERVER.E_UERR}`
};

export const INTERNAL_ROUTES = {
    /**
     *  AUTHENTICATION
     */
    AUTH_LOGIN: `/${INTERNAL_PATHS.AUTH_DEFAULT}/${INTERNAL_PATHS.AUTH_LOGIN}`,
    /**
     * PANEL
     */
    PANEL_USER_LIST: `/${INTERNAL_PATHS.PANEL_DEFAULT}/${INTERNAL_PATHS.PANEL_USER_LIST}`,
    /**
     * CRUDs
     */
    CRUDS_PRODUCTS: `/${INTERNAL_PATHS.CRUDS_DEFAULT}/${INTERNAL_PATHS.CRUDS_PRODUCTS}`,
    /**
     *  SERVER
     */
    SERVER_E_401: `/${INTERNAL_PATHS.SERVER_E_401}`,
    SERVER_E_404: `/${INTERNAL_PATHS.SERVER_E_404}`,
    SERVER_E_UERR: `/${INTERNAL_PATHS.SERVER_E_UERR}`
};
