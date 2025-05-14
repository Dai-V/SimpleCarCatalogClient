import { Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarMakeComponent } from './car-make/car-make.component';
import { MakeComponent } from './make/make.component';
import { AppComponent } from './app.component';
import { MakeCarAmountComponent } from './make-car-amount/make-car-amount.component';
import { LoginComponent } from './auth/login/login.component';
import { IndexComponent } from './index/index.component';

export const routes: Routes = [
    {path:"navbar", component: NavBarComponent},
    {path:"cars", component: CarMakeComponent},
    {path:"makes", component: MakeComponent},
    {path:"makes/:id", component: MakeCarAmountComponent},
    {path:"cars/:id", component: CarMakeComponent},
    {path:"login",component:LoginComponent},
    {path:"", component:IndexComponent, pathMatch:"full"}
];
