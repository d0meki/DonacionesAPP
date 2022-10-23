import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import { Countries } from '../../interfaces/country-interface';

@Component({
  selector: 'app-register-fundacion-page',
  templateUrl: './register-fundacion-page.component.html',
  styleUrls: ['./register-fundacion-page.component.css']
})
export class RegisterFundacionPageComponent implements OnInit {
  public countriesList : Countries[];
  public stateCountry : boolean = false;
  constructor(private helperService : HelperService) { 
    this.countriesList = [];
  }

  ngOnInit(): void {
    
    this.helperService.listCountries()
    .subscribe( (countries : Countries[]) => { 
      this.countriesList = countries;
    });
  }

  setStateCountry(){
    this.stateCountry = true;
    console.log("hojslkfjflksdjfdslkf");
  }

}
