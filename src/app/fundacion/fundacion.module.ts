import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { RegisterFundacionPageComponent } from './pages/register-fundacion-page/register-fundacion-page.component';

@NgModule({
  declarations: [
    RegisterFundacionPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule 
  ]
})
export class FundacionModule { }
