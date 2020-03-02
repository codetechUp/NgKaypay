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
import { MatSlideToggleModule } from '@angular/material';
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
    DashComponent
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
    FlashMessagesModule.forRoot(),


  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private userService:UserService) { }
   
}
