import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import {Router} from '@angular/router'
import {TaskService} from '../../service/task.service';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  proyecto = ''
  tareas=[]
  eventos=[
    // { // this object will be "parsed" into an Event Object
    //     title: 'The Title', // a property!
    //     start: '2020-12-01', // a property!
    //     end: '2020-12-02' // a property! ** see important note below about 'end' **
    //   },
    //   { // this object will be "parsed" into an Event Object
    //     title: 'The Title', // a property!
    //     start: '2020-12-05', // a property!
    //     end: '2020-12-08' // a property! ** see important note below about 'end' **
    //   }
  ]
  constructor(
    private router:Router,
    private task:TaskService
  ) { }

  ngOnInit(): void {
    this.proyecto = localStorage.getItem('proyecto')
    this.obtenerTareas()
    console.log('proyect',this.proyecto);
    
  }
  obtenerTareas(){
    this.task.obtenerTareas(this.proyecto).subscribe(
      (res)=>{
        this.tareas=res
        console.log(this.tareas);
        this.tareas = this.tareas.map(v=>{
          v.fecha_fin=v.fecha_fin.split("T")
          v.fecha_inicio=v.fecha_inicio.split("T")          
          return v
        })
        this.obtenerFechas()
      }, 
      (err)=>{
        console.log(err);
      }
    )
  }
  obtenerFechas(){
    this.eventos = this.tareas.map(v=>{
      let obj = {}
      obj['title']=v.titulo
      obj['start']=v.fecha_inicio[0]
      obj['end']=v.fecha_fin[0]
      return obj
    })
    console.log('eventos', this.eventos);
    this.calendarOptions.events=this.eventos
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events: this.eventos,
    height:"100vh"
  };

}
