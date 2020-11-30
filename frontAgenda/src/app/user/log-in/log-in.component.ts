import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  login = {
    email: '',
    pass: '',
  };

  ngOnInit(): void {
  }

  autenticar() {
    this.auth.loginUsuario(this.login).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.jwtToken);
        // retornar al home
        this.router.navigate(['auth/auth']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
