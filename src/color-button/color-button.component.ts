import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-button',
  templateUrl: './color-button.component.html',
  styleUrls: ['./color-button.component.css']
})
export class ColorButtonComponent implements OnInit {

  @Input()
  input1 :string;

  constructor() { }

  ngOnInit() {
    alert(this.input1);
  }
 
  Changecolor() {
    this.input1 = 'yellow';
    alert(this.input1);
  }

}