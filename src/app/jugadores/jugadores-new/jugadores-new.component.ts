import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Jugador } from '../jugador';

@Component({
  selector: 'app-jugadores-new',
  templateUrl: './jugadores-new.component.html',
  styleUrls: ['./jugadores-new.component.css']
})
export class JugadoresNewComponent implements OnInit {

  jugador: Jugador;
  jugadorForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  get idValido(){
    if(!this.jugadorForm.get('id').touched)
    return null;
    else 
    return this.jugadorForm.get('id').valid;
  }
  get puntValido(){
    if(!this.jugadorForm.get('puntuacion').touched)
    return null;
    else 
    return this.jugadorForm.get('puntuacion').valid;
  }
  crearFormulario(){
    this.jugadorForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.minLength(1)]],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      puntuacion: [30, this.minPuntValidator(30)],
    }
    );
  }

  minPuntValidator(minInputPunt: number): ValidatorFn{
return (c: AbstractControl): { [key: string]: any} | null => {
  if(c.value){
    const inputPunt = c.value
    return minInputPunt <= inputPunt ? null : { 'minPunt': minInputPunt};
  } 
  return null;
}
    
  }
  enviarFormulario(){

    console.log("se ha enviado correctamente");
  }
}
