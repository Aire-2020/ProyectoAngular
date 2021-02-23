import { Pipe, PipeTransform } from '@angular/core';
import { Jugador } from './jugador';

@Pipe({
  name: 'filtrarJugadores'
})
export class FiltrarJugadoresPipe implements PipeTransform {

  transform(jugadores: Jugador[], criterio: string): Jugador[] {
    const filter = criterio ? criterio.toLocaleLowerCase() : null;
    return filter ?
    jugadores.filter(p => p.nombre.toLocaleLowerCase().includes(filter))
    : jugadores;
  }

}
