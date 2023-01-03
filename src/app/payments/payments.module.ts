import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { RouterModule } from '@angular/router';
import { PaymentsRoutingModule } from './payments-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PaymentPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    PaymentsRoutingModule,
    FormsModule
  ]
})
export class PaymentsModule { }
