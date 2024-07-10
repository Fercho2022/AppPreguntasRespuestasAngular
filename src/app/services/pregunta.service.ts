import { Injectable } from '@angular/core';
import { Pregunta } from '../models/pregunta';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  indexPregunta=0;
  opcionSeleccionada: Respuesta | undefined;
  deshabilitarBtn:boolean=true;
  pregConfirmada:boolean=false;
  indexRespuesta!:number;
  respuestasUsuario:Array<number>=[];


  public preguntas:Pregunta[]=[
    new Pregunta('Cual es la capital de Argentina',[
      new Respuesta ('Buenos Aires', 1),
      new Respuesta ('Motevideo', 0),
      new Respuesta ('Santiago', 0),
      new Respuesta ('Lima', 0),


  ] ),
  new Pregunta('Cual es la capital de Francia',[
    new Respuesta ('Roma', 0),
    new Respuesta ('Paris', 1),
    new Respuesta ('Dublin', 0),
    new Respuesta ('Atenas', 0),


] ),
new Pregunta('Cual es la capital de Egipto',[
  new Respuesta ('Londres', 0),
  new Respuesta ('Berlin', 0),
  new Respuesta ('El Cairo', 1),
  new Respuesta ('Casablanca', 0),


] ),

  ]
  constructor() { }

  getPreguntas(){
    return this.preguntas.slice();
  }
}


