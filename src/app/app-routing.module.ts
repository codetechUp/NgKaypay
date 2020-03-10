import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ModiUserComponent } from './modi-user/modi-user.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UploadComponent } from './upload/upload.component';
import { DashComponent} from './dash/dash.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AffectComponent } from './affect/affect.component';
import { UserAffectComponent } from './user-affect/user-affect.component';
import { AffectTimeComponent } from './affect-time/affect-time.component';
import { DepotComponent } from './depot/depot.component';


const routes: Routes = [
  { path: 'dash', component: DashComponent},
  { path: 'liste', component: ModiUserComponent },
  { path: 'adduser', component: AddUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'liste/:id', component: UserPageComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'newcompte', component: CreateAccountComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'affect', component: AffectComponent },
  { path: 'userAffect', component: UserAffectComponent },
  { path: 'time', component: AffectTimeComponent },
  { path:'depot', component:DepotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
