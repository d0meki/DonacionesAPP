import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Proyecto } from '../../interfaces/projects-interface';
import { FundacionService } from '../../services/fundacion.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public foundation_id : number = 0;
  public Projects : Proyecto[] = [];
  public spinnerState : boolean = true;
  constructor(private authService : AuthService, private fundacionService : FundacionService) { }

  ngOnInit(): void {
    const user = this.authService.user;
    this.foundation_id = user.person.foundation.id;
    this.fundacionService.getProjects(this.foundation_id)
    .subscribe( (res: Proyecto[]) => {
      this.Projects = res;
      // console.log(res)
      this.spinnerState = false
    });
  }

  get projectsList(){
    return this.Projects;
  }

}
