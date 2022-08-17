import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  daComponentFratello: string;

  tot: number;

  ngOnInit() {
    this.tot = 0;
  }

  CambiaColore(e) {
    alert(e);
    this.daComponentFratello = e;
  }

  changeLabel(e) {
    alert ("ci siamo");
    this.tot= this.tot + e;
  }
}
