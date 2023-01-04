import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  public titulo: string;
  public edad: number;
  public descripcion: string;

  constructor(){

    this.titulo = 'Fabio Ramos Full stack Developer'
    this.edad = 20;
    this.descripcion = 'Desarrollador full stack con experiencia en react, angular, javascript, java, etc.';
    
    console.log('Inicio Component funcionando');

  }

}
