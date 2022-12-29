import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('opacity') public divarelem! : ElementRef;

  public progressState : boolean = false;

  public registerForm : FormGroup = this.formBuilder.group({
    'name': ['', [Validators.required, Validators.min(5)]],
    'email': ['', [Validators.required, Validators.min(5)]],
    'password': ['', [Validators.required, Validators.min(8)]],
    'lastname': [''],
    'phone': [0],
    'foto': ["https://res.cloudinary.com/dwcjd1xpm/image/upload/v1671578366/donaciones/user_profile_g2hqu8.png"]
  });
  constructor( private formBuilder : FormBuilder, private authService : AuthService, private router : Router, private render : Renderer2) { }

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
    } else{
      this.progressState = true;
      this.progress();
      this.authService.register(this.registerForm.value)
      .subscribe( (res => {
        this.progressState = false;
        this.progress();
        this.router.navigate(['auth/login']);
      }), (err)=> {
        console.log(err);
        this.progressState = false;
        this.progress();
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
