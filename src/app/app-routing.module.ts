import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFundacionPageComponent } from './fundacion/pages/register-fundacion-page/register-fundacion-page.component';
import { Page404Component } from './shared/page404/page404.component';
import { LoginComponent } from './auth/pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: Page404Component,
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: Page404Component
  },
  {
    path: 'cliente',
    component: Page404Component
  },
  {
    path: 'fundacion',
    component: RegisterFundacionPageComponent,
  },
  {
    path: 'Administrador',
    component: Page404Component
  },
  // {
  //   path: '**',
  //   component: Page404Component
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
