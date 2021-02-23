import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userUrl = '/assets/usuarios.json';
  constructor(private http: HttpClient) { }


  authUser(user: User, recordar): Observable<User>{
return this.http.get<User>(this.userUrl).pipe(
  map(u => {
    u['passwd']= user.passwd; 
    u['login']=user.login;
  localStorage.setItem('token',u.token);
  if(recordar)localStorage.setItem('login',u.login);
  return u})
);
  }

  isAuth():boolean{
if(localStorage.getItem('token')==null){
console.log("no existe");
return false;}
else if(localStorage.getItem('token').length>2)
    return true;
  }


  logOut(): void{
    console.log("se ha cerrado la sesion");
    localStorage.removeItem('token');

  }
}
