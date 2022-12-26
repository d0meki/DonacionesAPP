import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-project2',
  templateUrl: './card-project2.component.html',
  styleUrls: ['./card-project2.component.css']
})
export class CardProject2Component implements OnInit {
  @Input('profileImage') public profile: string;
  @Input('title') public title: string;
  @Input('project') public project : string;
  @Input('description') public description : string;
  @Input('image1') public image1: string;
  @Input('image2') public image2: string;
  @Input('goTo') public goTo : string;
    constructor(private router : Router) {
      this.profile = '';
      this.title = '';
      this.description = '';
      this.image1 = '';
      this.image2 = '';
      this.project = '';
      this.goTo = '';
     }
  ngOnInit(): void {
  }

  goto(){
    this.router.navigate([`/${this.goTo}`])
  }
}
