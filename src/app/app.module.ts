import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { FooterComponent } from './Components/footer/footer.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { ExperienciasComponent } from './Components/experiencias/experiencias.component';
import { CapacidadesComponent } from './Components/capacidades/capacidades.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { LoginComponent } from './Components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    InicioComponent,
    ExperienciasComponent,
    CapacidadesComponent,
    ProyectosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
