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
import { MatSlideToggleModule } from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    AddUserComponent,
    ModiUserComponent
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
    MatSlideToggleModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
