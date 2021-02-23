import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  constructor(private logServ: AuthService) { }

  ngOnInit(): void {
  }
  
  logout(){
    this.logServ.logOut();
  }
}
