import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/auth/services/auth.service';
import { FundacionGet } from '../../interfaces/fundacionResp-interface';
import { FundacionService } from '../../services/fundacion.service';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  private file : any[] = [];
  public fundation: FundacionGet | null;
  public fundation_id: number = 0;
  public spinnerState : boolean = true;
  public spinnerUpdate : boolean = false;
  public customForm: FormGroup = this.formBuild.group({
    'name': ['', [Validators.required]],
    'description': ['', [Validators.required]],
    'foundation_type': ['', [Validators.required]],
    'country': ['', [Validators.required]],
    'location': ['', [Validators.required]],
    'phone': [0, [Validators.required]],
    'email':['', [Validators.required]],
    'password': ['', Validators.required],
    'foto': ['', Validators.required]

  });
  constructor(private formBuild: FormBuilder, private authService: AuthService, private fundacionService: FundacionService) {
    this.fundation = null;
  }

  ngOnInit(): void {
    const user = this.authService.user;
    this.fundation_id = user.person.foundation.id;
    console.log(this.fundation_id)
    this.fundacionService.getFoundation(this.fundation_id)
      .subscribe((res: FundacionGet) => {
        console.log(res);
        this.customForm.setValue({
          'name': res.person.name,
          'description': res.description,
          'foundation_type': res.foundation_type,
          'country': res.country,
          'location': res.location,
          'phone': res.person.phone,
          'email': res.person.user.email,
          'password':  "12345678",
          'foto': res.person.foto
        });
        this.spinnerState = false;
      });

  }
  fieldValidator(field: string){
    return this.customForm.controls[`${field}`].errors && this.customForm.controls[`${field}`].touched;
  }
  changeImage(event : any){
    this.file[0] = event;
  }
  uploadImage(){
    const fileImages = new FormData();
    fileImages.append('file', this.file[0]);
    fileImages.append('upload_preset', 'donaciones_cloudinary');
    fileImages.append('cloud_name', this.fundacionService.cloudinaryKey);
    this.fundacionService.uploadImage(fileImages)
    .subscribe( (res) => {
      console.log(res.url)
      this.customForm.patchValue({foto : res.url});
      this.fundacionService.updateFoundation(this.fundation_id, this.customForm.value)
      .subscribe( res => {
        console.log(res);
        this.spinnerUpdate = false;
      });
    });
  }
  submitForm(){
    if(this.customForm.invalid){
      this.customForm.markAllAsTouched();
    } else {
      this.spinnerUpdate = true;
      if(this.file.length > 0 ){
        this.uploadImage();
      } else {
        this.fundacionService.updateFoundation(this.fundation_id, this.customForm.value)
        .subscribe( res => {
          console.log(res);
          this.spinnerUpdate = false;
        })
      }


    }
  }

}
