import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foundation, FoundationResp } from '../interfaces/fundacion-interface';
import { FundacionGet } from '../interfaces/fundacionResp-interface';
import { FundacionUpdate } from '../interfaces/fundacionUpd-interface';

@Injectable({
  providedIn: 'root'
})
export class FundacionService {
  private url: String;
  private _clodinary_key : string = "dwcjd1xpm";
  constructor(private http : HttpClient) {
    this.url = "http://127.0.0.1:8000";
  }
  get cloudinaryKey() : string {
    return this._clodinary_key;
  }
  createFoundation(data: Foundation) : Observable<FoundationResp>{
    const dir = `${this.url}/api/foundation`;
    return this.http.post<FoundationResp>(dir, data );
  }
  getFoundation(id : number) : Observable<FundacionGet>{
    const dir = `${this.url}/api/foundation/${id}`;
    return this.http.get<FundacionGet>(dir);
  }
  updateFoundation(id: number, data: FundacionUpdate) : Observable<any>{
    const dir = `${this.url}/api/foundation/${id}`;
    return this.http.put<any>(dir, data );
  }
  // deleteFoundation(id: String) : Observable<any>{
  //   const dir = `${this.url}/foundation/${id}`;
  //   return this.http.delete<any>(dir);
  // }
  uploadImage(data: any): Observable<any> {
    const dir = `https://api.cloudinary.com/v1_1/${this._clodinary_key}/image/upload`;
    return this.http.post(dir, data);
  }

  //projects

  getProjects(id: number) : Observable<any>{
    const dir = `${this.url}/api/projects/${id}`;
    return this.http.get(dir);
  }
  createProject(data: any) : Observable<any> {
    const dir = `${this.url}/api/project`;
    return this.http.post(dir, data);
  }
}
