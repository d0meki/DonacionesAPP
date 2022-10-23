import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Countries } from '../interfaces/country-interface';

@Injectable({
  providedIn: 'root'
})

export class HelperService {
  public url: string = "https://restcountries.com/v3.1/all";
  public countries : Countries[];

  constructor(private http: HttpClient) { 
    this.countries = [];
  }

  listCountries(): Observable<Countries[]>{
    return this.http.get<Countries[]>(this.url);
  }

}
