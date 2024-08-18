import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "@app/guards/auth.guard";
import { NoAuthGuard } from "@app/guards/no-auth.guard";
import { INTERNAL_PATHS } from "@data/constants/routes";
import { PERMISSIONS_ENUM } from "@data/enum";
import { Page404Component } from "@modules/server/page404/page404.component";
import { productsComponent } from "./products/data/products.component";


const routes: Routes = [
    {
        path: '',
        component: Page404Component
    },
    {
        path: 'products',
        component: productsComponent,
        canActivate: [AuthGuard],
        data: { Permission: PERMISSIONS_ENUM.TABLE_USER}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CRUDsRoutingModule{ }