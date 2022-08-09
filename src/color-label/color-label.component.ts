import { Component, OnInit } from '@angular/core';
import { ColorButtonComponent } from '../color-button/color-button.component';

@Component({
  selector: 'app-color-label',
  templateUrl: './color-label.component.html',
  styleUrls: ['./color-label.component.css']
})
export class ColorLabelComponent implements OnInit {
 
  textColorLabel :string;

  constructor() { }

  ngOnInit() {
  }

  CambiaTesto(e)
  {
    this.textColorLabel = e;
  }

}