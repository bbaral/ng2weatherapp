import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherDirectiveDirective } from './directives/weather-directive.directive';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import {DataFormatPipe} from './pipes/data-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ForecastComponent,
    HeaderComponent,
    WeatherDirectiveDirective,
    DataFormatPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
