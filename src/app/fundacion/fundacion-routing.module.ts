import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ProfilePageComponent } from "./pages/profile-page/profile-page.component";
import { ProjectPageComponent } from "./pages/project-page/project-page.component";
import { RegisterFundacionPageComponent } from "./pages/register-fundacion-page/register-fundacion-page.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'register',
        component: RegisterFundacionPageComponent
      },
      {
        path: 'home',
        component: HomePageComponent
      },
      {
        path: 'project',
        component: ProjectPageComponent
      },
      {
        path: 'perfil',
        component: ProfilePageComponent
      },
      {
        path: '**',
        redirectTo: 'register'
      }
    ]
  }
];

@NgModule({
    imports:[
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
})

export class FundacionRoutingModule {}
