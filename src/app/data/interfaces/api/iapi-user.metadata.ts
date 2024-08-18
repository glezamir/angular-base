export interface IApiUser {
    id: number;
    name: string;
    age: number;
    work?: string;
    avatar: string;
    description: string;
    token: string;
    permissions: {
        table_user: 1 | 0,
        detail_user: 1 | 0
    }
}
