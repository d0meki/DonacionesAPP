import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
  public cardState : boolean = false;
  public amount : number = 0;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  change(event:any){
    if(event.target.value === "1")
    this.cardState = true;
      else
    this.cardState = false;
  }
  updateValueAmount(event: Event){
    console.log(event)
  }
  payFundation(){
    if(this.cardState){
      this.router.navigate(['/payments/payment/cardpayment'])
    }
  }
}
