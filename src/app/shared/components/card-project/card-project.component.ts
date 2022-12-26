import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent implements OnInit {
@Input('profileImage') public profile: string;
@Input('title') public title: string;
@Input('project') public project : string;
@Input('description') public description : string;
@Input('image1') public image1: string;
@Input('image2') public image2: string;
@Input('goTo') public goTo : string;
@Input('goTo2') public goTo2 : string;
  constructor(private router : Router) {
    this.profile = '';
    this.title = '';
    this.project = '';
    this.description = '';
    this.image1 = '';
    this.image2 = '';
    this.goTo = '';
    this.goTo2 = '';
   }

  ngOnInit(): void {
  }
  goto(){
    this.router.navigate([`/project/${this.goTo}`]);
  }
  goto2(){
    this.router.navigate([`/${this.goTo2}`])
  }
}
