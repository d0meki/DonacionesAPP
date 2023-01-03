import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectPublic } from '../interface/project-interface';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private url: String;
  private _clodinary_key : string = "dwcjd1xpm";
  constructor(private http : HttpClient) {
    // this.url = "http://127.0.0.1:8000";
    this.url = "https://samiradev.com/donations/public";
  }

  projectsPublic() : Observable <ProjectPublic[]>{
    const dir = `${this.url}/api/projects`;
    return this.http.get<ProjectPublic[]>(dir);
  }

  projecPublic(id: number) : Observable<any> {
    const dir = `${this.url}/api/project/${id}`;
    return this.http.get(dir);
  }
}
