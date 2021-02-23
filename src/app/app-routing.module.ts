import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { JugadoresDetallesComponent } from './jugadores/jugadores-detalles/jugadores-detalles.component';
import { JugadoresListComponent } from './jugadores/jugadores-list/jugadores-list.component';
import { AuthGuard } from './user/auth.guard';

const routes: Routes = [
{path:"home", component: HomeComponent},
{path:"jugadores", 
canActivate: [AuthGuard],
component: JugadoresListComponent},
{path:"jugador/:id", component: JugadoresDetallesComponent},
{path:"login", component: LoginComponent},
{path:"**", pathMatch:'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
