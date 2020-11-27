import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component'
import { InvitationComponent } from './auth/invitation/invitation.component'
import { TaskComponent } from './auth/task/task.component'
import { CreateProjectComponent } from './auth/create-project/create-project.component'
import { ToolbarComponent } from './comp/toolbar/toolbar.component'
import { UserListComponent } from './auth/user-list/user-list.component'
import { CalendarComponent } from './auth/calendar/calendar.component'
const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'auth',
    component:ToolbarComponent,
    children:[
      {
        path:'auth',
        component:CreateProjectComponent
      },
      {
        path:'task',
        component:TaskComponent,
      },
      {
        path:'invitation',
        component:InvitationComponent
      },
      {
        path:'userList',
        component:UserListComponent
      },
      {
        path:'calendar',
        component:CalendarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }