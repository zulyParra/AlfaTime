import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }
  registrarUsuario = {
    nombre:"",
    email:"",
    pass:""
  }
  ngOnInit(): void {
  }

  registrarUser(){
    this.auth.registroUsuario(this.registrarUsuario).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/login']); // ir al login
      },
      (err) => console.log(err)
    );
  }

}
