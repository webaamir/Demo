import { BrowserModule }              from '@angular/platform-browser';
import { NgModule }                   from '@angular/core';
import { AppRoutingModule }           from './app-routing.module';
import { AppComponent }               from './app.component';
import { CalculationComponent }       from './calculation/calculation.component';
import { FormsModule }                from '@angular/forms';
import { CalculationService}          from '../app/Shared/CalculationService';

import {
  MatInputModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CalculationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CalculationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
