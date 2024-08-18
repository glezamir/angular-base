import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
//
import { SkeletonComponent as Mat_SkeletonComponent } from './layout_mt/skeleton/skeleton.component';
import { AuthModule } from '@modules/auth/auth.module';
//
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';

import { FlexLayoutModule } from '@angular/flex-layout';

//Skeleton AngularMat
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

  //Header
  import { MatheaderComponent } from './layout/matheader/matheader.component';
  import { MatIconModule } from '@angular/material/icon';
  import { MatButtonModule } from '@angular/material/button';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//  import { NoopAnimationsModule } from '@angular/platform-browser/animations';
  //Header
  //Side
  import { MatsideComponent } from '@layout/matside/matside.component';
  import { MatListModule } from '@angular/material/list';
  import { MatMenuModule } from '@angular/material/menu';
  //Side
  //Forms
  import { MatFormFieldModule } from '@angular/material/form-field';
  import { MatInputModule } from '@angular/material/input';
  import {MatDialogModule} from '@angular/material/dialog';
import { Page404Component } from './modules/server/page404/page404.component';
import { PageUnkErrComponent } from './modules/server/page-unk-err/page-unk-err.component';
import { Page401Component } from './modules/server/page401/page401.component';
  //Forms
//Skeleton AngularMat

@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    //
    Mat_SkeletonComponent,
    //
    FooterComponent,
    NavigationComponent,
    MatheaderComponent,
    MatsideComponent,
    Page404Component,
    PageUnkErrComponent,
    Page401Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule,
    //\/Skeleton AngularMat
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
      //\/Header
      MatButtonModule,
      MatIconModule,
      BrowserAnimationsModule,
//      NoopAnimationsModule,
      ///\Header
      //\/Side
      MatListModule,
      MatMenuModule,
      ///\Side
    ///\Skeleton AngularMat
    //\/Forms
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
    ///\Forms
  ],
  //\/Skeleton AngularMat
  exports: [
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
      //\/Header
      MatButtonModule,
      MatIconModule,
      BrowserAnimationsModule,
//      NoopAnimationsModule,
      ///\Header
      //\/Side
      MatListModule,
      MatMenuModule,
      ///\Side
      //\/Forms
      MatFormFieldModule
      ///\Forms
  ],
  ///\Skeleton AngularMat
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
