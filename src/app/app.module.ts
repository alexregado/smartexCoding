import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { GetRestaurantsService } from './services/get-restaurants.service';
import { InputTextComponent } from './input-text/input-text.component';


@NgModule({
  declarations: [
    AppComponent,
    InputTextComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [GetRestaurantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
