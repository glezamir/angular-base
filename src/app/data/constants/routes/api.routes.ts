import { environment as ENV } from 'environments/environment';

export const API_ROUTES = {
    AUTH: {
        LOGIN: `${ENV.uri}/spr/auth/`
    },
    USERS: {
        DETAIL: `${ENV.uri}/panel/user`  //solo ejemplo del tuto
    }
}

