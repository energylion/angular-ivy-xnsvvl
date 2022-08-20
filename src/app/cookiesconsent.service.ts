import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-somma-sottrazione',
  templateUrl: './somma-sottrazione.component.html',
  styleUrls: ['./somma-sottrazione.component.css'],
})
export class SommaSottrazioneComponent implements OnInit {
  constructor(cookie: cooekie) {}

  @Output()
  setTotLabel: EventEmitter<number> = new EventEmitter();

  a: number;
  b: number;
  c: number;
  tot: number;

  ngOnInit() {
    this.a = 0;
    this.b = 0;
    this.c = 0;
    this.tot = 0;
  }

  somma() {
    this.c = Number(this.a) + Number(this.tot);

    this.tot = this.c;
    this.setTotLabel.emit(Number(this.c));
  }

  sottrai() {
    this.c = Number(this.tot) - Number(this.b);

    this.tot = this.c;
    this.setTotLabel.emit(Number(this.c));
  }
}
