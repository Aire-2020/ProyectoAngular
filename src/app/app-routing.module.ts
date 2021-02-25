import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { JugadorEditComponent } from './jugadores/jugador-edit/jugador-edit.component';
import { JugadoresDetallesComponent } from './jugadores/jugadores-detalles/jugadores-detalles.component';
import { JugadoresListComponent } from './jugadores/jugadores-list/jugadores-list.component';
import { JugadoresNewComponent } from './jugadores/jugadores-new/jugadores-new.component';
import { JugadoresResolveService } from './jugadores/jugadores-resolve.service';
import { AuthGuard } from './user/auth.guard';

const routes: Routes = [
{path:"home", component: HomeComponent},
{path:"jugadores", 
canActivate: [AuthGuard],
component: JugadoresListComponent},
{path:"jugador/:id", component: JugadoresDetallesComponent},
{path:"login", component: LoginComponent},

{path:"jugador/edit/:id",
canActivate: [AuthGuard],
resolve:{jugador: JugadoresResolveService},
component: JugadorEditComponent},

{path:"jugadores/new", 
canActivate: [AuthGuard],
component: JugadoresNewComponent},

{path:"**", pathMatch:'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
