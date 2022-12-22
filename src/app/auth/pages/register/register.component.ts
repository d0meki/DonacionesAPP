import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private usuarioService:UsuarioService) {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  registrarse() {
    if (this.registerForm.valid) {
        //llamar al servicio y Registrar
        this.usuarioService.registerUsuario(this.registerForm.value);
        console.log("Registrado correctamente");
        
    } else {
      //mensaje de que no se pudo registrar por X o Y motivo
      // this.toastr.error('Suscripcion', 'Tarjeta rechazada, Revise sus datos de la tarjeta!');
    }
  }
}
