import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DonadorPerfil } from '../interfaces/donador-interface';

@Injectable({
  providedIn: 'root'
})
export class DonacionesService {
  private URL : string = "http://127.0.0.1:8000";
  constructor(private http : HttpClient) { }

  getProfile(id : number) : Observable<DonadorPerfil>{
    const dir = `${this.URL}/api/donator/${id}`;
    return this.http.get<DonadorPerfil>(dir);
  }
}
