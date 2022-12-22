import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthUser } from 'src/app/Interfaces/Usuario';
import { RegisterUser } from 'src/app/Interfaces/UsuarioRegister';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://samiradev.com/will/donations_backend/public/api/';
  constructor(private http: HttpClient) { }

  getAllUser(){
    this.http.get(this.apiUrl+`users`).subscribe(response =>{
      console.log(response);
    });
  }
  Authentication(user:AuthUser){
    this.http.post(this.apiUrl+`autentificar`,user).subscribe(response =>{
      console.log(response);
    });
  }
  registerUsuario(user:RegisterUser){
    this.http.post(this.apiUrl+`usuario`,user).subscribe(response =>{
      console.log(response);
    });
  }
}
