import { Pregunta } from 'src/app/models/pregunta';
import { PreguntaService } from './../../services/pregunta.service';
import { Component } from '@angular/core';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent {

listPregunta: Pregunta[] = [];
clase!:string;
constructor(public _preguntaService:PreguntaService){


}
ngOnInit(){
  this.listPregunta=this._preguntaService.getPreguntas()
}

obtenerPregunta(){
  return this.listPregunta[this._preguntaService.indexPregunta]. descripcionPregunta
}

respuestaSeleccionada(respuesta:Respuesta, indexRta:number){

  if (this._preguntaService.pregConfirmada===true){
    return;
  }
  this._preguntaService.opcionSeleccionada=respuesta;
  this._preguntaService.deshabilitarBtn=false;
  this._preguntaService.indexRespuesta=indexRta;

}

addClassOption(respuesta:Respuesta){

  if (respuesta===this._preguntaService.opcionSeleccionada && !this._preguntaService.pregConfirmada){
     return 'active text-light';

}else{
  if(respuesta===this._preguntaService.opcionSeleccionada && this._preguntaService.pregConfirmada && this._preguntaService.opcionSeleccionada.esCorrecta===1){
    return 'list-group-item-success';
}else{
  if(respuesta===this._preguntaService.opcionSeleccionada && this._preguntaService.pregConfirmada && this._preguntaService.opcionSeleccionada.esCorrecta===0){
    return 'list-group-item-danger';
}else{
  return '';
}
}
}


}

iconCorrecta(respuesta:Respuesta){
  if(respuesta===this._preguntaService.opcionSeleccionada && this._preguntaService.pregConfirmada && this._preguntaService.opcionSeleccionada.esCorrecta===1){
    return true;
}else{

    return false;


}
}
iconIncorrecta(respuesta:Respuesta){
  if(respuesta===this._preguntaService.opcionSeleccionada && this._preguntaService.pregConfirmada && this._preguntaService.opcionSeleccionada.esCorrecta===0){
    return true;
}else{

    return false;


}
}

}

