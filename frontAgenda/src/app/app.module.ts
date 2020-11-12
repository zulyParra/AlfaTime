import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { SliderComponent } from './slider/slider.component';
import { MarketingComponent } from './marketing/marketing.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    SliderComponent,
    MarketingComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
