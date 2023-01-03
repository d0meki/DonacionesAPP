import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaycardService {
  public APIURL : string = "http://localhost:8081";
  constructor(private http: HttpClient) {}

  sendPayment(token: string, id: string ) : Observable<any> {
    const dir = `${this.APIURL}/api/order/${id}`;
    return this.http.patch<any>(dir, { token });
  }

  generateOrder(data: any): Observable<any> {
    const dir = `${this.APIURL}/api/order/`;
    return this.http.post(dir, data);
  }

}
