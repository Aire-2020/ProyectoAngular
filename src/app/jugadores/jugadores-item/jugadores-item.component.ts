import { Component, Input, OnInit } from '@angular/core';
import { Jugador } from '../jugador';

@Component({
  selector: 'app-jugadores-item',
  templateUrl: './jugadores-item.component.html',
})
export class JugadoresItemComponent implements OnInit {

  @Input() jugador: Jugador;
  constructor() { }

  ngOnInit(): void {
  }

}
