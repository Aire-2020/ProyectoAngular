import { Injectable } from '@angular/core';
import { Jugador } from './jugador';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JugadoresService } from './jugadores.service';

@Injectable({
  providedIn: 'root'
})
export class JugadoresResolveService implements Resolve<Jugador>{

  constructor(private jugServ: JugadoresService,
    private router: Router) { }

    resolve(route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Jugador | Observable<Jugador> | Promise<Jugador>
    {
    return this.jugServ.getJugador(route.params.id).pipe(
      catchError(error => {this.router.navigate(['/jugadores']);
      return of(null);
    })
    );
  }
}
