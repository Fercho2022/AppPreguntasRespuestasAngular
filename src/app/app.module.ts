import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PrimengModule } from './components/shared/primeng/primeng.module';
import { PreguntaComponent } from './components/pregunta/pregunta.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BotoneraComponent } from './components/pregunta/botonera/botonera.component';
import { RespuestaComponent } from './components/respuesta/respuesta.component';
import { BrowserAnimationsModule }
    from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PreguntaComponent,
    NavbarComponent,
    BotoneraComponent,
    RespuestaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    BrowserAnimationsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
