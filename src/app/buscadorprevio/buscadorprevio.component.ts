import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscadorprevio',
  templateUrl: './buscadorprevio.component.html',
  styleUrls: ['./buscadorprevio.component.scss']
})
export class BuscadorprevioComponent implements OnInit {

  tipoActividadValue: String = '';
  selectedOption: string = '';

  tipoActividad: Array<any> = [
    {'nombre': 'turismo'},
    {'nombre': 'actividades'},
    {'nombre': 'inversiones'}
  ];

  changingValue(ev){
    console.log('evento', ev);
    console.log('sacarValue', ev.target);
    console.log('tipoActividadValue', this.tipoActividadValue);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
