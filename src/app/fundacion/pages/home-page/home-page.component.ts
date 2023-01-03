import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Proyecto } from '../../interfaces/projects-interface';
import { FundacionService } from '../../services/fundacion.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  @ViewChild('opacity') public divarelem! : ElementRef;
  public progressState : boolean = false;

  public foundation_id : number = 0;
  public Projects : Proyecto[] = [];
  public spinnerState : boolean = true;
  constructor(private authService : AuthService, private fundacionService : FundacionService, private render : Renderer2) { }

  ngOnInit(): void {
    // this.progressState = true;
    // this.progress();
    const user = this.authService.user;
    this.foundation_id = user.person.foundation.id;
    this.fundacionService.getProjects(this.foundation_id)
    .subscribe( (res: Proyecto[]) => {
      this.Projects = res;
      // console.log(res)
      this.spinnerState = false;
      // this.progressState = false;
      this.progress();
    });
  }

  get projectsList() {
    return this.Projects;
  }

  progress(){
    const div = this.divarelem.nativeElement;
    if(this.progressState)
    this.render.setStyle(div, 'opacity', '0.5');
    else
      this.render.setStyle(div, 'opacity','1');
  }

}
