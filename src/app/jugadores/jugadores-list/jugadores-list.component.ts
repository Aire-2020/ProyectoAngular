import { Component, OnInit } from '@angular/core';
import { Jugador } from '../jugador';
import { JugadoresService } from '../jugadores.service';
@Component({
  selector: 'app-jugadores-list',
  templateUrl: './jugadores-list.component.html',

})
export class JugadoresListComponent implements OnInit {

  jugadores: Jugador[] = [

  ];
  constructor(private jugserv: JugadoresService) { }

  ngOnInit(): void {
    this.jugserv.getProducts().subscribe(
      jugadores => this.jugadores = jugadores
    );
  }

}
