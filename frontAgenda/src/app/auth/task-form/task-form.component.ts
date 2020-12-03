import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import {TaskService} from '../../service/task.service'
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task = {
    titulo:'',
    descripcion:'',
    id_usuario_invitado:'',
    fecha_inicio:'',
    fecha_fin:'',
    nombre_proyecto:''
  }
  constructor(
    private router:Router,
    private taskS:TaskService
  ) { }

  ngOnInit(): void {
  }
  crearTarea(){    
    this.task.nombre_proyecto=localStorage.getItem('proyecto')
    console.log('task',this.task);
    this.taskS.crearTarea(this.task).subscribe(
      (res)=>{
        console.log('res',res);
        this.router.navigate(['auth/task']); 
      },
      (err)=>{
        console.log(err);
      }
    )
  }
}
