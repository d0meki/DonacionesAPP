import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project-public-page',
  templateUrl: './project-public-page.component.html',
  styleUrls: ['./project-public-page.component.css']
})
export class ProjectPublicPageComponent implements OnInit {
  public project : any;
  public project_id : any;
  constructor(private router : Router, private projectService : ProjectsService) { }

  ngOnInit(): void {
    const url = this.router.url.split('/')[2];
    this.project_id = url;
    console.log(this.project_id);
    this.projectService.projecPublic(this.project_id)
    .subscribe( res => {
      this.project = res;
      console.log(res);
    });
  }
  getFoto2(data : any){
    if(data.photos.length === 2)
    return data.photos[1].foto;
    else
    return data.photos[0].foto;
  }

}
