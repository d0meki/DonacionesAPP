import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foundation, FoundationResp } from '../interfaces/fundacion-interface';

@Injectable({
  providedIn: 'root'
})
export class FundacionService {
  private url: String;

  constructor(private http : HttpClient) { 
    this.url = "http://127.0.0.1:8000/api";
  }

  createFoundation(data: Foundation) : Observable<FoundationResp>{
    const dir = `${this.url}/foundation`;
    return this.http.post<FoundationResp>(dir, data );
  }
  getFoundation() : Observable<FoundationResp[]>{
    const dir = `${this.url}/foundations`;
    return this.http.get<FoundationResp[]>(dir);
  }
  getFoundationById(id: String) : Observable<FoundationResp>{
    const dir = `${this.url}/foundation/${id}`;
    return this.http.get<FoundationResp>(dir);
  }
  updateFoundation(id: string, data: Foundation) : Observable<FoundationResp>{
    const dir = `${this.url}/foundation/${id}`;
    return this.http.put<FoundationResp>(dir, data ); 
  }
  deleteFoundation(id: String) : Observable<any>{
    const dir = `${this.url}/foundation/${id}`;
    return this.http.delete<any>(dir);
  }
}
