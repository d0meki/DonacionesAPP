import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FundacionService } from '../../services/fundacion.service';
import { FoundationResp } from '../../interfaces/fundacion-interface';
import { HelperService } from '../../services/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-fundacion-page',
  templateUrl: './register-fundacion-page.component.html',
  styleUrls: ['./register-fundacion-page.component.css']
})
export class RegisterFundacionPageComponent implements OnInit{
  public customForm : FormGroup = this.formbuild.group({
    name: ["", Validators.required ],
    description: ["", Validators.required ],
    foundation_type: ["", Validators.required ],
    phone2: ["", Validators.required ],
    phone: [0],
    country: ["", Validators.required],
    location: ["", Validators.required ],
    email: ["", Validators.required ],
    password: ["", Validators.required ]
  });

  public listCountries : any[] = [];
  public countryState : boolean = false;
  public reasonSocialState: boolean = false;
  public stateSubmitForm : boolean = false;
  public notificationSuccess : boolean = false;
  public notificationError : boolean = false;
  
  constructor( private formbuild: FormBuilder, private fundacionService: FundacionService, private helperService : HelperService,private router : Router) { 

  }
  ngOnInit(): void {
    this.helperService.listCountries()
    .subscribe( (listCountries :any) => {
      this.listCountries = listCountries.sort((a: any, b: any) => a.region - b.region);
      console.log(listCountries)
    });
  }

  fieldValidator(field: String) : boolean | null {
    return this.customForm.controls[`${field}`].errors && this.customForm.controls[`${field}`].touched;
  }
  fieldsValidatorFoundation() : boolean | null {
    return (!this.customForm.controls['name'].errors && !this.customForm.controls['description'].errors &&
            !this.customForm.controls['foundation_type'].errors && !this.customForm.controls['phone2'].errors && 
            !this.customForm.controls['country'].errors && !this.customForm.controls['location'].errors) && true;
  }

  fieldsValidatorRepresentative() : boolean | null {
    return (!this.customForm.controls['email'].errors && !this.customForm.controls['password'].errors) && true;
  }
  
  fieldsValidatorAll(){
    return this.customForm.valid;
  }
  setStateCountry(){
    this.countryState = true;
    console.log(this.countryState);
  }
  setStateSocialReason(){
    this.reasonSocialState = true;
  }

  setValueCountry(country: any){
    this.customForm.controls['country'].setValue(country.name.common);
    this.customForm.controls['phone2'].setValue(country.idd.root + country.idd.suffixes[0]) + "  ";
    this.customForm.controls['phone'].setValue(parseInt(this.customForm.controls['phone2'].value));
    this.countryState = false;
  }
  setValueSocialReason(e: any){
    this.customForm.controls['foundation_type'].setValue(e.target.value);
    console.log(e.target.value);
  }

  setTransitionSuccess(){
    this.notificationSuccess = true;
    setTimeout(() => {
      this.notificationSuccess = false;
    }, 3000);
  }
  
  setTransitionError(){
    this.notificationError = true;
    setTimeout(() => {
      this.notificationError = false;
    }, 3000);
  }

  formSubmit(){
    if(this.customForm.invalid){
      this.customForm.markAllAsTouched();
      return;
    }
    //this.customForm.reset();
    this.stateSubmitForm = true;
    this.fundacionService.createFoundation(this.customForm.value)
    .subscribe( (foundation: FoundationResp) => {
      console.log(foundation);
      this.stateSubmitForm = false;
      this.setTransitionSuccess();
      this.router.navigate(['auth/login']);
    }, err => {
      console.log(err);
      this.stateSubmitForm = false;
      this.setTransitionError();
    });
  }

}
