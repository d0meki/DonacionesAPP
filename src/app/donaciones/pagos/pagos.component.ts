import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {

  }
  paypal(){
    this.router.navigateByUrl('/www.paypal.com/signin');
    
  }
  express(){
    this.router.navigateByUrl('/www.americanexpress.com/en-us/account/login?inav=iNavLnkLog');
  }
  

}
