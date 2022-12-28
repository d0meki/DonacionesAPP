import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { RouterModule } from '@angular/router';
import { PaymentsRoutingModule } from './payments-routing.module';



@NgModule({
  declarations: [
    PaymentPageComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    RouterModule,
  ]
})
export class PaymentsModule { }
