import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // va igual si se configura https
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users = "http://localhost:3000/api/usuario/"
  private inv = "http://localhost:3000/api/rol/invitar"
  constructor(private http: HttpClient, private router: Router) { }
  obtenerLista(body){
    // console.log(body);
    const omg = `${this.users}/listaUsuario/${body._id}`
    return this.http.get<any>(omg)
  }
  invitarUsuario(body){
    const url = this.inv
    return this.http.post<any>(url,body)
  }
}
