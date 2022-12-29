import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Foundation, FoundationResp } from '../interfaces/fundacion-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URLAPI :string = "http://127.0.0.1:8000";

  constructor( private http : HttpClient, private cookieService : CookieService) { }

  login(data : any) : Observable<any>{
    const dir = `${this.URLAPI}/api/auth`;
    return this.http.post<any>(dir, data);
  }
  register(data: any) : Observable<any> {
    const dir = `${this.URLAPI}/api/donator`;
    return this.http.post<any>(dir, data);
  }
  createFoundation(data: Foundation) : Observable<FoundationResp>{
    const dir = `${this.URLAPI}/api/foundation`;
    return this.http.post<FoundationResp>(dir, data );
  }
// auth
  authentication(data : any){
    localStorage.setItem('user_donation', JSON.stringify(data.usuario));
    localStorage.setItem('user_type_donation', JSON.stringify(data.tipo_usuario));
    this.cookieService.set('token', JSON.stringify(data.token));
    console.log('listes')
  }
  logOut(){
    localStorage.setItem('user_donation', "");
    localStorage.setItem('user_type_donation', "");
    this.cookieService.set('token', '');
  }

  isLogged() : boolean{
    const token = this.cookieService.get('token');
    const user = localStorage.getItem('user_donation');
    const type = localStorage.getItem('user_type_donation');
    const value = (user !== null && user.length> 0 && type !== null && type.length > 0);
    // console.log(value)
    return value;
  }
  get user_type() : string {
    const user = localStorage.getItem('user_donation');
    const type = localStorage.getItem('user_type_donation');
    if(type !== null && type!.length > 1){
      const type_user = JSON.parse(type || "");
      // console.log(type_user)
      return type_user;
    }
    return "";
  }
  get user() : any{
    const user = localStorage.getItem('user_donation');
    if(user !== null && user.length > 1){
      const usuario = JSON.parse(user || "");
      return usuario
    }
    return null;
  }
}
