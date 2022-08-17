import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-somma-sottrazione',
  templateUrl: './somma-sottrazione.component.html',
  styleUrls: ['./somma-sottrazione.component.css']
})
export class SommaSottrazioneComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  somma(a: number, b: number): number {
    return a + b;
  }

  sottrai(a: number, b: number): number {
    return a - b;
  }
}
