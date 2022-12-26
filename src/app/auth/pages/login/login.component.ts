import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm : FormGroup = this.formBuilder.group({
    'email': ['',[Validators.required, Validators.min(5)]],
    'password': ['', [Validators.required, Validators.min(8)]]
  });
  constructor( private formBuilder : FormBuilder, private authService : AuthService, private router : Router) { }

  ngOnInit():  void {
    if(this.authService.isLogged()){
      this.router.navigate(['/']);
    }
  }
  fieldValidator(field: string): boolean | null{
    return this.loginForm.controls[`${field}`].errors && this.loginForm.controls[`${field}`].touched;
  }
  submitLogin(){
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
    }
    else {
      this.authService.login(this.loginForm.value)
      .subscribe( (res : any) => {
        if(res.status === false)
        console.log(res)
        else {
          this.authService.authentication(res);
          this.router.navigate(['/']);
        }
      });
    }
  }
}
