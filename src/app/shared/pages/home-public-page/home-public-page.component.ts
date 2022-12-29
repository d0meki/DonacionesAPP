import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectPublic } from '../../interface/project-interface';
import { ProjectsService } from '../../services/projects.service';


@Component({
  selector: 'app-home-public-page',
  templateUrl: './home-public-page.component.html',
  styleUrls: ['./home-public-page.component.css']
})
export class HomePublicPageComponent implements OnInit {
  public projects: ProjectPublic[];
  public foto2: string = "";
  constructor(private router: Router, private projectService: ProjectsService) {
    this.projects = [];
  }

  ngOnInit(): void {
    this.projectService.projectsPublic()
      .subscribe((res: ProjectPublic[]) => {
        this.projects = res;
        console.log(res)
      })

 

  }

  get projectsList() {
    return this.projects;
  }
  getFoto2(data: any) {
    if (data.photos.length === 2)
      return data.photos[1].foto;
    else
      return data.photos[0].foto;
  }

}
