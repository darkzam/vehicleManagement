import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BikeComponent } from './bikes/bike.component';
import { MotorcycleComponent } from './motorcycles/motorcycle.component';
import { CarComponent } from './cars/car.component';
import { ShipComponent } from './ships/ship.component'

@NgModule({
  declarations: [
    AppComponent,
    BikeComponent,
    MotorcycleComponent,
    CarComponent,
    ShipComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
