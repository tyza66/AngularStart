import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { A1Component } from './a1/a1.component';
import { B2Component } from './b2/b2.component';
import { C3Component } from './c3/c3.component';

@NgModule({
  declarations: [
    AppComponent,
    A1Component,
    B2Component,
    C3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
