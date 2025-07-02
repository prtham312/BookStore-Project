import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
    {path : '' , redirectTo : 'home' , pathMatch : 'full'},
    {path : 'home' , component : DashboardComponent , children : [
        {path : '' , component : HomeComponent}
    ]}
];

