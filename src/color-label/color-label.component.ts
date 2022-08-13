import { Component, Input, OnInit } from '@angular/core';
import { ColorButtonComponent } from '../color-button/color-button.component';

@Component({
  selector: 'app-color-label',
  templateUrl: './color-label.component.html',
  styleUrls: ['./color-label.component.css']
})
export class ColorLabelComponent implements OnInit {
 
  @Input()
  textColorLabel :string;

  constructor() { }

  ngOnInit() {

  }

}