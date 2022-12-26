import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MenuComponent } from './components/menu/menu.component';
import { Page404Component } from './components/page404/page404.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { FundacionPublicPageComponent } from './pages/fundacion-public-page/fundacion-public-page.component';
import { ProjectPublicPageComponent } from './pages/project-public-page/project-public-page.component';
import { HomePublicPageComponent } from './pages/home-public-page/home-public-page.component';
import { CardProject2Component } from './components/card-project2/card-project2.component';
import { TextValidatorComponent } from './components/text-validator/text-validator.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MenuComponent,
    Page404Component,
    NavBarComponent,
    FooterComponent,
    CategoriesComponent,
    CardProjectComponent,
    FundacionPublicPageComponent,
    ProjectPublicPageComponent,
    HomePublicPageComponent,
    CardProject2Component,
    TextValidatorComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    TextValidatorComponent,
  ]
})
export class SharedModule { }
