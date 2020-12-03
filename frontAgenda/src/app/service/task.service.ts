import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // va igual si se configura https
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskUrl = 'http://localhost:3000/api/tarea'
  constructor(private http: HttpClient, private router: Router) { }
  crearTarea(body){
    const omg = `${this.taskUrl}/tarea`
    return this.http.post<any>(omg,body)
  }
  obtenerTareas(body){
    const omg = `${this.taskUrl}/listar/${body}`
    return this.http.get<any>(omg)
  }

}
