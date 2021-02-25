import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appMinPuntuacion]',
providers:[{provide: NG_VALIDATORS, useExisting: MinPuntuacionDirective,
multi: true}]
})
export class MinPuntuacionDirective implements Validator{

  @Input('appMinPuntuacion') minPuntuacion;
  constructor() { }

 validate( c: AbstractControl): { [key: string]: any} | null{
    console.log(c.value, this.minPuntuacion);
    if(this.minPuntuacion && c.value) { // si rebem algun valor
      console.log(c.value, this.minPuntuacion);
      if(this.minPuntuacion > c.value) {
        return { minPuntuacion: true }  //devolvemos el error
      }
    }
    return null; // sense error
  }
}
