import { Component, OnInit, VERSION } from '@angular/core';
import { CookieService } from './cookiesconsent.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  daComponentFratello: string;

  tot: number;

  constructor(private cookie:CookieService) {
    this.cookie.getCookie('coffee')
  }

  ngOnInit() {
    this.tot = 0;
  }

  CambiaColore(e) {
    alert(e);
    this.daComponentFratello = e;
  }

  changeLabel(e) {
    this.tot = Number(e);
  }
}
