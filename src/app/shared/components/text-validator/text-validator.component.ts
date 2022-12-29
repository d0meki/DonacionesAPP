import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-validator',
  templateUrl: './text-validator.component.html',
  styleUrls: ['./text-validator.component.css']
})
export class TextValidatorComponent implements OnInit {
  @Input("message") message : String = "";
  constructor() { }

  ngOnInit(): void {
  }

}
