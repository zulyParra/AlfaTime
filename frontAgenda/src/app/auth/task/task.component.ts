import { Component, OnInit, Inject } from '@angular/core';
import {Router} from '@angular/router'
import {TaskService} from '../../service/task.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  proyecto = ''
  tareas=[]
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
          console.log("1");
          return v
        })
      }, 
      (err)=>{
        console.log(err);
      }
    )
  }

  typesOfShores: string[] = ['Debug', 'test', 'Q&A', 'develop', 'merge'];
}
