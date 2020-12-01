import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProjectService } from '../../service/project.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  proyecto = []
  newProyect = {
    nombre_proyecto:''
  }
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private project:ProjectService
  ) { }

  ngOnInit(): void {
    this.obtenerProyectos()
  }

  obtenerProyectos(){
    this.project.obtenerProyectos().subscribe(
      (res)=>{        
        this.proyecto = res
        console.log(this.proyecto);
      },
      (err)=>{
        console.log(err);
      }
    )
  }
  crearProyecto(){
    this.project.crearProyectos(this.newProyect).subscribe(
      (res)=>{
        console.log(res);
        this.obtenerProyectos()
      },
      (err)=>{
        console.log(err);
      }
    )
  }
  eliminarProyecto(body){
    console.log("omg",body);
    this.project.eliminarProyecto(body._id).subscribe(
      (res)=>{
        console.log(res);
        this.obtenerProyectos()
      },
      (err)=>{
        console.log(err);
      }
    )
  }
  cambiarRuta(proyecto){
    // console.log("object",proyecto);
    localStorage.setItem("proyecto",proyecto)
    this.router.navigate(['auth/userList']);     
  }
}
