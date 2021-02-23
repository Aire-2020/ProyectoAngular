import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jugador } from './jugador';
import {map, filter} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  constructor(private http: HttpClient) { }

  urlJug ="/assets/jugadores.json";
  getProducts(): Observable<Jugador[]>{  
  return this.http.get<{jugadores: Jugador[]}>(this.urlJug).pipe( 
    map(response => response.jugadores));
  }


    getJugador(id:string){  
      return this.http.get<{jugadores: Jugador[]}>(this.urlJug).pipe( 
        map(response => response.jugadores.filter(j => j.id === id)[0]),
        );
}
}
