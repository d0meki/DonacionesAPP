import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
import { DonadorPerfil } from '../../interfaces/donador-interface';
import { DonacionesService } from '../../services/donaciones.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  public donator_id : any;
  public foto : string = "";
  public customForm: FormGroup = this.formBuild.group({
    'name': ['', [Validators.required]],
    'lastname': ['', [Validators.required]],
    'phone': ['', [Validators.required]],
    'email':['', [Validators.required]],
    'password': ['', Validators.required],
    'foto': ['', Validators.required]
  });
  constructor(private formBuild : FormBuilder, private authService : AuthService, private donacionesService : DonacionesService) { }

  ngOnInit(): void {
    const user = this.authService.user;
    this.donator_id = user.person.donator.id;
    console.log(this.donator_id)
    this.donacionesService.getProfile(this.donator_id)
    .subscribe( (res: DonadorPerfil) => {
      this.customForm.setValue({
        'name': res.person.name,
        'lastname': res.person.lastname,
        'phone': res.person.phone,
        'email': res.person.user.email,
        'password': "******",
        'foto': res.person.foto,
      });
      this.foto = res.person.foto;
    });
  }
  fieldValidator(field: string){
    return this.customForm.controls[`${field}`].errors && this.customForm.controls[`${field}`].touched;
  }

  submitForm(){

  }
}
