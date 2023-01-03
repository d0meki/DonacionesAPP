import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { RouterModule } from '@angular/router';
import { PaymentsRoutingModule } from './payments-routing.module';
import { StripeCardComponent } from './components/stripe-card/stripe-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertFloatingComponent } from './components/alert-floating/alert-floating.component';
import { HttpClientModule } from '@angular/common/http';
import { CardPaymentPageComponent } from './pages/card-payment-page/card-payment-page.component';
import { ProgressComponent } from './components/progress/progress.component';

@NgModule({
  declarations: [
    PaymentPageComponent,
    StripeCardComponent,
    AlertFloatingComponent,
    CardPaymentPageComponent,
    ProgressComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    PaymentsRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class PaymentsModule { }
