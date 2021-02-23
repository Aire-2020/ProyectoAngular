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
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JugadoresListComponent,
    JugadoresItemComponent,
    HomeComponent,
    JugadoresDetallesComponent,
    FiltrarJugadoresPipe,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [JugadoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
