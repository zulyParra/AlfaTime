import { Component, OnInit,Inject  } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../service/users.service'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  proyecto=''
  usuario = []
  roles = []
  nombreUsuario = ''
  constructor(
    private router:Router,
    private list:UsersService
  ) { }

  ngOnInit(): void {
    this.proyecto = localStorage.getItem('proyecto')
    console.log(this.proyecto);
    this.obtenerLista()
  }
  obtenerLista(){
    this.list.obtenerLista({_id:this.proyecto}).subscribe(
      (res)=>{
        this.usuario = res.usuarios
        this.roles=res.omg
        console.log(res)        
      },
      (err)=>{
        console.log(err);
      }
    )
  }
  invitarUsuario(){
    this.list.invitarUsuario({
      nombre:this.nombreUsuario,
      _id:this.proyecto
    }).subscribe(
      (res)=>{
        console.log(res);
        this.obtenerLista()
      },
      (err)=>{
        console.log(err);
      }
    )
  }
  cambiarRuta(){
    this.router.navigate(['auth/task']); 
  }

}
