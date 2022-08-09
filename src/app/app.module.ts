import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ColorButtonComponent } from '../color-button/color-button.component';
import { ColorLabelComponent } from '../color-label/color-label.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ColorButtonComponent,
  ColorLabelComponent  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
