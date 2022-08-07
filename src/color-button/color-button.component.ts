import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-color-button',
  templateUrl: './color-button.component.html',
  styleUrls: ['./color-button.component.css']
})
export class ColorButtonComponent implements OnInit {

  @Input()
  input1 :string;

  @Output()
  output1 :EventEmitter<string>;

  constructor() { }

  ngOnInit() {
    alert(this.input1);
  }
 
  Changecolor() {
    this.input1 = 'yellow';
    alert(this.input1);
    this.output1.emit('blue');
  }

}
