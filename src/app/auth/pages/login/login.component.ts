import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('opacity') public divarelem! : ElementRef;
  public progressState : boolean = false;

  public loginForm : FormGroup = this.formBuilder.group({
    'email': ['',[Validators.required, Validators.min(5)]],
    'password': ['', [Validators.required, Validators.min(8)]]
  });
  constructor( private formBuilder : FormBuilder, private authService : AuthService, private router : Router, private render : Renderer2) { }

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
      this.progressState = true;
      this.progress();
      this.authService.login(this.loginForm.value)
      .subscribe( (res : any) => {
        if(res.status === false){
          console.log(res)
          this.progressState = false;
          this.progress();
        }
        else {
          this.authService.authentication(res);
          this.progressState = false;
          this.progress();
          this.router.navigate(['/']);
        }
      });
    }
  }
  progress(){
    const div = this.divarelem.nativeElement;
    if(this.progressState)
    this.render.setStyle(div, 'opacity', '0.5');
    else
      this.render.setStyle(div, 'opacity','1');
  }
}
