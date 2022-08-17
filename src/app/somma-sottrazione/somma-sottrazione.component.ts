import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-somma-sottrazione',
  templateUrl: './somma-sottrazione.component.html',
  styleUrls: ['./somma-sottrazione.component.css']
})
export class SommaSottrazioneComponent implements OnInit {
  constructor() {}

  a:number;
  b:number;

  ngOnInit() {}

  somma(): number {
    return this.a + this.b;
  }

  sottrai(): number {
    return this.a - this.b;
  }
}
