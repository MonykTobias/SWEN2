import { Routes } from '@angular/router';
import {ToursComponent} from './components/tours/tours';
import {HomeComponent} from './components/home/home';
import {LoginComponent} from './components/login/login';
import {RegisterComponent} from './components/register/register';
import {ProfileComponent} from './components/profile/profile';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'profile', component: ProfileComponent},
  {path: 'home', component: HomeComponent},
  {path: 'tours', component: ToursComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', redirectTo: 'home'}
];
