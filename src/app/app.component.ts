import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  daComponentFratello :string;

  CambiaColore(e)
  {
    alert(e);
this.daComponentFratello = e;
  }
}
