import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { BuscadorComponent } from './buscador/buscador.component';



const routes : Routes = [
  {
    path : '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path : 'inicio',
    component: InicioComponent
  },
  {
    path : 'buscador/:**',
    component: BuscadorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
