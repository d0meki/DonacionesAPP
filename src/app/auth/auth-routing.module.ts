import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterFundacionComponent } from './pages/register-fundacion/register-fundacion.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    children:
      [
        {
          path: "login",
          component: LoginComponent
        },
        { path: "register",
          component: RegisterComponent
        },
        {
          path: "registerfundacion",
          component: RegisterFundacionComponent
        },
        {
          path: '**',
          redirectTo: 'login'
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
