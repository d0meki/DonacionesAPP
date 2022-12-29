import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { PaymentPageComponent } from "./pages/payment-page/payment-page.component";
const routes : Routes = [
  {
    path: '',
    children: [
      {
        path: 'payment',
        component: PaymentPageComponent
      },
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
