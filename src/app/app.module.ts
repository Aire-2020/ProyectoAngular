import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { JugadoresListComponent } from './jugadores/jugadores-list/jugadores-list.component';
import { JugadoresItemComponent } from './jugadores/jugadores-item/jugadores-item.component';
import { HomeComponent } from './components/home/home.component';
import { JugadoresService } from './jugadores/jugadores.service';
import { HttpClientModule } from '@angular/common/http';
import { JugadoresDetallesComponent } from './jugadores/jugadores-detalles/jugadores-detalles.component';
import { FiltrarJugadoresPipe } from './jugadores/filtrar-jugadores.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { MostrarMasDirective } from './directivas/mostrar-mas.directive';
import { JugadorEditComponent } from './jugadores/jugador-edit/jugador-edit.component';
import { MinPuntuacionDirective } from './validadores/min-puntuacion.directive';
import { JugadoresNewComponent } from './jugadores/jugadores-new/jugadores-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JugadoresListComponent,
    JugadoresItemComponent,
    HomeComponent,
    JugadoresDetallesComponent,
    FiltrarJugadoresPipe,
    LoginComponent,
    MostrarMasDirective,
    JugadorEditComponent,
    MinPuntuacionDirective,
    JugadoresNewComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [JugadoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
