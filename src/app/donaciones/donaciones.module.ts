import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonacionesRoutingModule } from './donaciones-routing.module';
import { PagosComponent } from './pagos/pagos.component';
import { PaypalComponent } from './paypal/paypal.component';


@NgModule({
  declarations: [
    PagosComponent,
    PaypalComponent
  ],
  imports: [
    CommonModule,
    DonacionesRoutingModule
  ]
})
export class DonacionesModule { }
