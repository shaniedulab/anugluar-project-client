import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RegisterComponent } from './register/register.component';
import { CanActivateRouteGuardService } from './routeGuard/can-activate-route-guard.service';
import { CanDeactivateRouteGuardService } from './routeGuard/can-deactivate-route-guard.service';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';

const routes: Routes = [
  {path:'',  redirectTo: '/login',pathMatch: 'full'},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path: 'forgetpassword', component: ForgetpasswordComponent},
  { path: 'home', component: HomeComponent, canActivate:[CanActivateRouteGuardService]},
  {path:'admin', component: AdminComponent},
  { path: 'addtodo', component: AddtodoComponent},
  {path:'**',component:NopagefoundComponent},
  // canActivate:[CanActivateRouteGuardService],canDeactivate:[CanDeactivateRouteGuardService]
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
