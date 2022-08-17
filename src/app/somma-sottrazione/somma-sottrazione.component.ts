import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-somma-sottrazione',
  templateUrl: './somma-sottrazione.component.html',
  styleUrls: ['./somma-sottrazione.component.css'],
})
export class SommaSottrazioneComponent implements OnInit {
  constructor() {}

  @Output()
  setTotLabel: EventEmitter<number> = new EventEmitter();

  a: number;
  b: number;
  c: number;

  ngOnInit() {
    this.a = 0;
    this.b = 0;
    this.c = 0;
  }

  somma() {
    alert(this.a);
    this.c = (Number (this.a) + Number(this.b));
    alert(this.c);
    this.setTotLabel.emit(this.c);
  }

  sottrai() {
    this.c = (Number(this.a) - Number(this.b));
    this.setTotLabel.emit(this.c);
  }
}
