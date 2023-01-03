import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  // private URLAPI :string = "http://localhost:8080";
  private URLAPI :string = "https://samiradev.com/donations/public";
  constructor(private http : HttpClient) { }
  pagarConPayPal(pago:any): Observable<any>{
    return this.http.post(this.URLAPI+`/api/paypal/create-payment`,pago);
  }
}
