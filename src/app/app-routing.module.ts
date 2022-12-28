import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthDonationGuard } from './auth/guards/auth-donation.guard';
import { AuthGuard } from './auth/guards/auth.guard';
import { Page404Component } from './shared/components/page404/page404.component';
import { FundacionPublicPageComponent } from './shared/pages/fundacion-public-page/fundacion-public-page.component';
import { HomePublicPageComponent } from './shared/pages/home-public-page/home-public-page.component';
import { ProjectPublicPageComponent } from './shared/pages/project-public-page/project-public-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePublicPageComponent
  },
  {
    path: ':name',
    component: FundacionPublicPageComponent
  },
  {
    path: 'project/:id',
    component: ProjectPublicPageComponent
  },
  {
    path: 'fundacion',
    loadChildren: () => import('./fundacion/fundacion.module').then( m => m.FundacionModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: 'donador',
    loadChildren: () => import('./donaciones/donaciones.module').then( m => m.DonacionesModule),
    canLoad: [AuthDonationGuard],
    canActivate: [AuthDonationGuard]
  },
  {
    path: 'payments',
    loadChildren: ()=> import('./payments/payments.module').then( m => m.PaymentsModule)
  },
  {
    path: '404',
    component: Page404Component,
  },
  {
    path: '**',
    redirectTo: '404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
