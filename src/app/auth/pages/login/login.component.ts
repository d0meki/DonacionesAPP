import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder:FormBuilder) { 
      this.loginForm = this.formBuilder.group({
        usuario: ['',[Validators.required]],
        password: ['',Validators.required],
      })
  }

  ngOnInit(): void {

  }
  login(){
    if (this.loginForm.valid) {
        //llamar al servicio para Loguearse
        console.log("Login con Exito");
    } else {
      //mensaje de que no se pudo registrar por X o Y motivo
      // this.toastr.error('Suscripcion', 'Tarjeta rechazada, Revise sus datos de la tarjeta!');
    }

  }
  
}
