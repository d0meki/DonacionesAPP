import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-fundacion-page',
  templateUrl: './register-fundacion-page.component.html',
  styleUrls: ['./register-fundacion-page.component.css']
})
export class RegisterFundacionPageComponent implements OnInit {
  public customForm : FormGroup = this.formbuild.group({
    name: ["", Validators.required ],
    description: ["", Validators.required ],
    business: ["", Validators.required ],
    business2: ["", Validators.required ],
    country: ["", Validators.required ],
    location: ["", Validators.required ],
    email: ["", Validators.required ],
    phone: [0, Validators.required ]
  });

  constructor( private formbuild: FormBuilder) { 

  }

  ngOnInit(): void {
    
  }

}
