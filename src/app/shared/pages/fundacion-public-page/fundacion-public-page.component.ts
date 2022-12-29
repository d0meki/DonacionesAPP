import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FundacionGet } from 'src/app/fundacion/interfaces/fundacionResp-interface';
import { FundacionService } from 'src/app/fundacion/services/fundacion.service';

@Component({
  selector: 'app-fundacion-public-page',
  templateUrl: './fundacion-public-page.component.html',
  styleUrls: ['./fundacion-public-page.component.css']
})
export class FundacionPublicPageComponent implements OnInit {
  public foundation_id : any;
  public foundation : FundacionGet | null;
  constructor(private router : Router, private fundacionService : FundacionService) {
    this.foundation = null;
  }

  ngOnInit(): void {
    const url = this.router.url.split('/')[1];
    this.foundation_id = url;
    console.log(this.foundation_id);
    this.fundacionService.getFoundation(this.foundation_id)
    .subscribe( res => {
      this.foundation = res;
    })
  }

}
