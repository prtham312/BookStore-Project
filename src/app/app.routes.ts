import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';


export const routes: Routes = [
    {path : '' , redirectTo : 'home' , pathMatch : 'full'},
    {path : '' , component : DashboardComponent , children : [
        {path : 'home' , component : HomeComponent},
    ]},
    {path : 'forgotPassword' , component : ForgotPasswordComponent},
    {path : 'login', component : LoginSignupComponent}
];

