import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TipCalcComponent } from './tip-calc/tip-calc.component';
import { TipDisplayComponent } from './tip-display/tip-display.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TipService} from "./tip.service";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TipCalcComponent,
    TipDisplayComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [TipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
