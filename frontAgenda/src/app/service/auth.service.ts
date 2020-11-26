import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tokenName } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //generamos dos variables
  private registroUrl = 'http://localhost:3000/api/usuario/'; //si se tiene servidor se le indica el hosting aca en esta ruta en lugar de el localhost:3000
  private loginUrl = 'http://localhost:3000/api/auth';

  constructor( private http:HttpClient) {}

  registroUsuario(usuario){
    //observable
    return this.http.post<any>(this.registroUrl, usuario);
  }
  loginUsuario(usuario){
    //observable
    return this.http.post<any>(this.loginUrl, usuario);
  }

  loginOn(){
    //los simbolos de !! me permiten convertir la respuesta en un true
    return !!localStorage.getItem('token');
  }

  obtenerToken(){
    return localStorage.getItem('token');

  }

}
