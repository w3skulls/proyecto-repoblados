import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LogobarComponent } from './logobar/logobar.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { BuscadorprevioComponent } from './buscadorprevio/buscadorprevio.component';
import { FiltrosComponent } from './filtros/filtros.component';
import { BuscadorinnerComponent } from './buscadorinner/buscadorinner.component';
import { ContenedorResultadosComponent } from './contenedor-resultados/contenedor-resultados.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LogobarComponent,
    BuscadorComponent,
    BuscadorprevioComponent,
    FiltrosComponent,
    BuscadorinnerComponent,
    ContenedorResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
