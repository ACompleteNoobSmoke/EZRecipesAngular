import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { LoginComponent } from './Pages/login/login.component';


const routes: Routes = [
  { path: 'home',  component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
