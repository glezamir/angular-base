export interface IApiUserAuthenticated {
    fullname: string;
    age: number;
    token: string;
    avatar: string;
    work: string;
    permissions: {
        table_user: 1 | 0,
        detail_user: 1 | 0
    }
}
