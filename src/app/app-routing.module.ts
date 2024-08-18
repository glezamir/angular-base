import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/guards/auth.guard';
import { INTERNAL_PATHS } from '@data/constants/routes';
import { PERMISSIONS_ENUM } from '@data/enum';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';
import { SkeletonComponent  as Mat_SkeletonComponent } from '@layout_mt/skeleton/skeleton.component';
import { LoginComponent } from '@modules/auth/login/login.component';
import { PageUnkErrComponent } from '@modules/server/page-unk-err/page-unk-err.component';
import { Page401Component } from '@modules/server/page401/page401.component';
import { Page404Component } from '@modules/server/page404/page404.component';

const routes: Routes = [
  //Se busca por orden, por eso '**' esta al final
  //Pruebas de nuevo skeleton
  {
    path: 'sk',
    component: Mat_SkeletonComponent,

    children: [
      {
        path: '',
        component: LoginComponent
      }
    ],

    // children: [
    //   {
    //     path: '/sk',
    //     loadChildren: () =>
    //     import('@modules/auth/login/login.component').then((m) => m.LoginComponent)
    //   }
    // ]

  },
  //Pruebas de nuevo skeleton
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: INTERNAL_PATHS.SERVER_E_UERR,
    component: PageUnkErrComponent
  },
  {
    path: INTERNAL_PATHS.SERVER_E_401,
    component: Page401Component
  },
  {
    path: INTERNAL_PATHS.SERVER_E_404,
    component: Page404Component
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'panel',
    component: SkeletonComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@modules/user/user.module').then( (m) => m.UserModule)
      }
    ],
    canActivate: [AuthGuard],
    data: { Permission: PERMISSIONS_ENUM.TABLE_USER}
  },
  {
    path: 'cruds',
    component: SkeletonComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@modules/cruds/cruds.module').then( (m) => m.CRUDsModule)
      }
    ],
    canActivate: [AuthGuard],
    data: { Permission: PERMISSIONS_ENUM.TABLE_USER}
  },
  {
    path: '**',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
