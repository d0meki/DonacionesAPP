import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-floating',
  templateUrl: './alert-floating.component.html',
  styleUrls: ['./alert-floating.component.css']
})
export class AlertFloatingComponent implements OnInit {
@Input('type') public type : string = "";
@Input('message') public message : string = "";
  constructor() { }

  ngOnInit(): void {

  }

}
