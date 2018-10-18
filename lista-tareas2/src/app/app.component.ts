import { Component } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tareas: tareas2[];
  ultimaId: number;

  constructor(){
    this.tareas = [{id: 1, titulo: 'Terminar el API',completada: false},
    {id: 2, titulo: 'Corregir Historias de Usuario',completada: true},
    {id: 3, titulo: 'Comprar boletos para el cine ',completada: false}
  ];
  this.ultimaId = 3;
}

class tareas2 {
  id: number;
  titulo: string;
  completada: boolean;

  constructor(valores: Object = {}){
    Object.assign(this.valores);
  }
}

agregarTarea(tituloTarea: string){
  const tareaNueva = new tareas2({titulo: tituloTarea});
  tareaNueva.id = ++this.ultimaId;
  this.tareas2.push(tareaNueva);
}  
