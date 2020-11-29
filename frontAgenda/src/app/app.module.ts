import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { SliderComponent } from './slider/slider.component';
import { MarketingComponent } from './marketing/marketing.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { HomeComponent } from './home/home.component';
import { InvitationComponent } from './auth/invitation/invitation.component';
import { TaskComponent } from './auth/task/task.component';
import { SidebarComponent } from './comp/sidebar/sidebar.component';
//complementos
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
//componentes
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatButtonModule} from '@angular/material/button';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet'; 
import {MatListModule} from '@angular/material/list'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { ToolbarComponent } from './comp/toolbar/toolbar.component'; 
import {MatIconModule} from '@angular/material/icon'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateProjectComponent } from './auth/create-project/create-project.component';
import { CalendarComponent } from './auth/calendar/calendar.component';
import { EditarPerfilComponent } from './auth/editar-perfil/editar-perfil.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UserListComponent } from './auth/user-list/user-list.component'; 
import {MatDialogModule} from '@angular/material/dialog';
import { NewProjectComponent } from './dialog/new-project/new-project.component';
import { NewTaskComponent } from './dialog/new-task/new-task.component';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    SliderComponent,
    MarketingComponent,
    PiePaginaComponent,
    HomeComponent,
    InvitationComponent,
    TaskComponent,
    SidebarComponent,
    ToolbarComponent,
    CreateProjectComponent,
    CalendarComponent,
    EditarPerfilComponent,
    UserListComponent,
    NewProjectComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    BrowserModule,
    FullCalendarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
