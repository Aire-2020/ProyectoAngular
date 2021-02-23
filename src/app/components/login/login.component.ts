import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  usuario: User = {login: "", passwd: ""};
recordar= false;
  constructor(private log: AuthService) { }

  ngOnInit(): void {
    if(localStorage.getItem('login')){
      this.usuario.login = localStorage.getItem('login');
      this.recordar = true;
    }
  }

  login($event){
    
    this.log.authUser(this.usuario, this.recordar).subscribe(
      u =>{
        console.log(u);
        this.usuario = u;
      },
      e => console.log(e)
    )
  }
}
