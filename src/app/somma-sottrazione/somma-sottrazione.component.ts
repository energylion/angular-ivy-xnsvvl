import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CookieService } from '../cookiesconsent.service';

@Component({
  selector: 'app-somma-sottrazione',
  templateUrl: './somma-sottrazione.component.html',
  styleUrls: ['./somma-sottrazione.component.css'],
})
export class SommaSottrazioneComponent implements OnInit {
  constructor(private cookie: CookieService) {}

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
    this.cookie.setCookie('coffee', this.tot.toString(), 30);
  }

  somma() {
    this.c = Number(this.a) + Number(this.tot);

    this.tot = this.c;
    this.cookie.setCookie('coffee', this.tot.toString(), 30);
    this.setTotLabel.emit(Number(this.c));
  }

  sottrai() {
    this.c = Number(this.tot) - Number(this.b);

    this.tot = this.c;
    this.cookie.setCookie('coffee', this.tot.toString(), 30);
    this.setTotLabel.emit(Number(this.c));
  }
}
