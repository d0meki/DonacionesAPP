import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm : FormGroup = this.formBuilder.group({
    'name': ['', [Validators.required, Validators.min(5)]],
    'email': ['', [Validators.required, Validators.min(5)]],
    'password': ['', [Validators.required, Validators.min(8)]],
    'lastname': [''],
    'phone': [0],
    'foto': ["https://res.cloudinary.com/dwcjd1xpm/image/upload/v1671578366/donaciones/user_profile_g2hqu8.png"]
  });
  constructor( private formBuilder : FormBuilder, private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
    if(this.authService.isLogged()){
      this.router.navigate(['/']);
    }
  }

  fieldValidator(field: string): boolean | null{
    return this.registerForm.controls[`${field}`].errors && this.registerForm.controls[`${field}`].touched;
  }

  submitRegister(){
    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
    }
    this.authService.register(this.registerForm.value)
    .subscribe( (res => {
      this.router.navigate(['auth/login']);
    }), (err)=> {
      console.log(err);
    });
  }
}
