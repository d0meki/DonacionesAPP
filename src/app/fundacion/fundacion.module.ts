import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http'

import { RegisterFundacionPageComponent } from './pages/register-fundacion-page/register-fundacion-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FundacionRoutingModule } from './fundacion-routing.module';
import { TextValidatorInputComponent } from './components/text-validator-input/text-validator-input.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { SideBarFundacionComponent } from './components/side-bar-fundacion/side-bar-fundacion.component';
import { DropAndDrawImageComponent } from './components/drop-and-draw-image/drop-and-draw-image.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SideBarProfileFundacionComponent } from './components/side-bar-profile-fundacion/side-bar-profile-fundacion.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ProgressComponent } from './components/progress/progress.component';


@NgModule({
  declarations: [
    RegisterFundacionPageComponent,
    HomePageComponent,
    TextValidatorInputComponent,
    ProjectPageComponent,
    SideBarFundacionComponent,
    DropAndDrawImageComponent,
    ProfilePageComponent,
    SideBarProfileFundacionComponent,
    SpinnerComponent,
    ProgressComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FundacionRoutingModule,
    RouterModule
  ],
  exports: [
  ]
})
export class FundacionModule { }
