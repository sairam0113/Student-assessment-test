import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';

import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "./guard/auth.guard";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {VerifymailComponent} from "./verifymail/verifymail.component";
import {SignupComponent} from "./signup/signup.component";
import {QuestionsComponent} from "./questions/questions.component";
import {ProgressComponent} from "./progress/progress.component";


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'register-user', component: SignupComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifymailComponent },
  {path:'question',component:QuestionsComponent},
  {path:'progress',component:ProgressComponent}



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
