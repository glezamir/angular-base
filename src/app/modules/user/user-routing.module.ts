import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "@app/guards/auth.guard";
import { PERMISSIONS_ENUM } from "@data/enum";
import { Page404Component } from "@modules/server/page404/page404.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UserListComponent } from "./user-list/user-list.component";

const routes: Routes = [
    {
        path: '',
        component: Page404Component
    },
    {
        path: 'user',
        component: UserListComponent,
        canActivate: [AuthGuard],
        data: { Permission: PERMISSIONS_ENUM.TABLE_USER}
    },
    {
        path: 'user/:id',
        component: UserDetailComponent,
        canActivate: [AuthGuard],
        data: { Permission: PERMISSIONS_ENUM.DETAIL_USER}
    },
    {
        path: '**',
        component: UserListComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule{ }