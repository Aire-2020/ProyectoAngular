import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jugador } from '../jugador';
import { JugadoresService } from '../jugadores.service';

@Component({
  selector: 'app-jugadores-detalles',
  templateUrl: './jugadores-detalles.component.html',
  styleUrls: ['./jugadores-detalles.component.css']
})
export class JugadoresDetallesComponent implements OnInit {

jugador: Jugador;

  constructor(private activatedRoute: ActivatedRoute,
    private jugSer: JugadoresService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(j =>{
     this.jugSer.getJugador(j.id).subscribe(j => this.jugador = j)}
    )
  }

}
