import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { RouterModule } from '@angular/router';
import { PaymentsRoutingModule } from './payments-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PaymentPageComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class PaymentsModule { }
