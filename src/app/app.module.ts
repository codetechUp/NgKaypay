import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { JwtService } from './services/jwt.service';
import { AddUserComponent } from './add-user/add-user.component';
import { ModiUserComponent } from './modi-user/modi-user.component';
import {NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule, MatFormFieldModule, MatInputModule, MatCheckbox, MatCheckboxModule, MatDatepickerModule, MatIconModule, MatNativeDateModule } from '@angular/material';
import { UserPageComponent } from './user-page/user-page.component';
import { UploadComponent } from './upload/upload.component';
import { UserService } from './services/user.service';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FormRegistreComponent } from './form-registre/form-registre.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { DashComponent } from './dash/dash.component';'angular2-flash-messages';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { AffectComponent } from './affect/affect.component';
import {MatStepperModule} from '@angular/material/stepper';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserAffectComponent } from './user-affect/user-affect.component';
import { AffectTimeComponent } from './affect-time/affect-time.component';
import { TransactionComponent } from './transaction/transaction.component';
import { DepotComponent } from './depot/depot.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    AddUserComponent,
    ModiUserComponent,
    UserPageComponent,
    UploadComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    FormRegistreComponent,
    CreateAccountComponent,
    DashComponent,
    AffectComponent,
    UserAffectComponent,
    AffectTimeComponent,
    TransactionComponent,
    DepotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule ,
    FormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatFormFieldModule,
    FlashMessagesModule.forRoot(),
    NgxLoadingModule.forRoot(
      {
      animationType:  ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff', 
      secondaryColour: '#ffffff', 
      tertiaryColour: '#ffffff'
      }),
      MatStepperModule,
      CommonModule,
    RouterModule,

    MatFormFieldModule,
    MatInputModule,


  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private userService:UserService) { }
   
}
