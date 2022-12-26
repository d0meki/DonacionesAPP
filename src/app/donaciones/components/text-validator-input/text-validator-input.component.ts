import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-text-validator-input',
  templateUrl: './text-validator-input.component.html',
  styleUrls: ['./text-validator-input.component.css']
})
export class TextValidatorInputComponent implements OnInit {
  @Input("message") message : String = "";
  constructor() { }

  ngOnInit(): void {
  }

}
