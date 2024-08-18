import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';


@NgModule({
  declarations: [
    UserDetailComponent,
    UserListComponent
  ],
  providers: [UserListComponent],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
