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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JugadoresListComponent,
    JugadoresItemComponent,
    HomeComponent,
    JugadoresDetallesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [JugadoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
