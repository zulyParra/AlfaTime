import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { SliderComponent } from './slider/slider.component';
import { MarketingComponent } from './marketing/marketing.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { InvitacionComponent } from './invitacion/invitacion.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    SliderComponent,
    MarketingComponent,
    PiePaginaComponent,
    MenuLateralComponent,
    InvitacionComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
