import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Countries } from '../interfaces/country-interface';

@Injectable({
  providedIn: 'root'
})

export class HelperService {
  public url: string = "https://restcountries.com/v3.1/all";

  constructor(private http: HttpClient) {
  }

  listCountries(): Observable<any>{
    return this.http.get<any>(this.url);
  }

}
