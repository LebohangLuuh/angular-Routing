import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full', },
  { path: 'home', component: HomeComponent}
];


//  @NgModule({
//       imports: [RouterModule.forRoot(routes)],
//       exports: [RouterModule],
//     })
//     export class AppRoutingModule {}