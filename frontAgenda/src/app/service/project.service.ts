import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // va igual si se configura https
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectUrl = 'http://localhost:3000/api/proyecto'
  
  constructor(private http: HttpClient, private router: Router) { }
  obtenerProyectos(){
    const omg = `${this.projectUrl}/get`
    return this.http.get<any>(omg)  
  }
  crearProyectos(body){
    const omg = `${this.projectUrl}/crearProyecto`
    return this.http.post<any>(omg,body)
  }
  eliminarProyecto(bodys){
    const omg = `${this.projectUrl}/${bodys}`
    return this.http.delete<any>(omg)
  }
}
