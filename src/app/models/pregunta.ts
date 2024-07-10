import { Respuesta } from "./respuesta";

export class Pregunta{
  descripcionPregunta!:string;
  respuesta:Respuesta[]=[];

  constructor(descripcionPregunta:string,respuestas:Respuesta[]){
this.descripcionPregunta=descripcionPregunta;
this.respuesta=respuestas;


  }
}
