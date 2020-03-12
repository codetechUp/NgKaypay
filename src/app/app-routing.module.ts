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
import { TransactionComponent } from './transaction/transaction.component';
import { AuthGuard } from 'src/app/guard/auth.guard';


const routes: Routes = [
  { path: 'dash', component: DashComponent,canActivate:[AuthGuard]},


  { path: 'liste',canActivate:[AuthGuard] 
      ,children:[
              { path: '', component: ModiUserComponent,canActivate:[AuthGuard] },
              { path: ':id', component: UserPageComponent,canActivate:[AuthGuard] }
  ]
  },

  { path: 'adduser', component: AddUserComponent,canActivate:[AuthGuard] },

  { path: 'login', component: LoginComponent  },

  { path: 'newcompte', component: CreateAccountComponent,canActivate:[AuthGuard] },

  { path: 'affect', component: AffectComponent ,canActivate:[AuthGuard]},

  { path: 'userAffect', component: UserAffectComponent ,canActivate:[AuthGuard]},

  { path: 'time', component: AffectTimeComponent,canActivate:[AuthGuard] },

  { path:'depot', component:DepotComponent,canActivate:[AuthGuard]},

  { path:'transaction', component: TransactionComponent ,canActivate:[AuthGuard]} 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
