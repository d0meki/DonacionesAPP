import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { CardPaymentPageComponent } from "./pages/card-payment-page/card-payment-page.component";
import { PaymentPageComponent } from "./pages/payment-page/payment-page.component";
const routes : Routes = [
  {
    path: '',
    children: [
      {
        path: 'payment',
        component: PaymentPageComponent
      },
      {
        path: 'payment/cardpayment',
        component: CardPaymentPageComponent
      }
      // {
      //   path: '**',
      //   redirectTo: 'payment'
      // }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PaymentsRoutingModule {}
