import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Jugador } from '../jugador';
import { JugadoresService } from '../jugadores.service';

@Component({
  selector: 'app-jugador-edit',
  templateUrl: './jugador-edit.component.html',
  styleUrls: ['./jugador-edit.component.css']
})
export class JugadorEditComponent implements OnInit {

  jugador: Jugador;
  @ViewChild("jugadorForm",{static:true}) jugadorForm: NgForm

  constructor(private activateRoute: ActivatedRoute,
    private jugServ: JugadoresService) { }

  ngOnInit(): void {
    this.jugador = this.activateRoute.snapshot.data['jugador'];
  }
editar(){

  this.jugServ.editJugador(this.jugadorForm.value).subscribe(
    j => this.jugador = j
  );
  return false;
}
}
