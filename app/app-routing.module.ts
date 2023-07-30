import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './module/login/login/login.component';

const routes: Routes = [
  {
    path: 'iniciar-sesion',
    component: LoginComponent
  },
  {
    path:'populares',
    loadChildren : () => import('../app/module/movies/movies-routing.module').then((m)=>m.MoviesRoutingModule),
   
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'iniciar-sesion'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
