import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {

  pago: any = {
    codigo_moneda:'',
    monto:0,
    codigo_tipo_pago:-1
  }
  moneda = [{ codigo: 'USD', name: 'Dolar', convertido: 6.97 },
  { codigo: 'EUR', name: 'Euro', convertido: 10.8 },
  { codigo: 'BOB', name: 'Bolivianos', convertido: 0 },
  ];
  constructor(private payment:PaymentService,private router:Router) { }


  ngOnInit(): void {
  }
  pagar(){
    if (this.pago.codigo_tipo_pago==2) {
      console.log("pagar con paypal");
      this.payment.pagarConPayPal(this.pago).subscribe(resp =>{
        console.log(resp);
        if (resp.estado) {
         // this.router.navigateByUrl(resp.data.link[1].href);
          window.open(resp.data.links[1].href, "_blank");
        }else{
          console.log("Error!!!");
        }
      })
    }else{
      console.log("Otro metodo de pago");      
    }
  }

}
