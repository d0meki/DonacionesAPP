import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'

import { RegisterFundacionPageComponent } from './pages/register-fundacion-page/register-fundacion-page.component';
import { TextValidatorInputComponent } from './components/text-validator-input/text-validator-input.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RegisterFundacionPageComponent,
    TextValidatorInputComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class FundacionModule { }
