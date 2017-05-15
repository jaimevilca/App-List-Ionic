import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PendientesComponent } from "../pages/pendientes/pendientes.component";
import { TerminadosComponent } from "../pages/terminados/terminados.component";
import { TabsPage } from "../pages/tabs/tabs";
import { ListaDeseosService } from "./services/lista-deseos.service";
import { AgregarComponent } from "../pages/agregar/agregar.component";
import { PlaceHolderPipe } from "./pipes/placeholder.pipe";
import { DetalleComponent } from "../pages/detalle/detalle.component";
import { PendientesPipe } from "./pipes/pendientes.pipe";

@NgModule({
  declarations: [
    MyApp,
    PendientesComponent,
    TerminadosComponent,
    TabsPage,
    AgregarComponent,
    PlaceHolderPipe,
    PendientesPipe,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PendientesComponent,
    TerminadosComponent,
    TabsPage,
    AgregarComponent,
    DetalleComponent
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListaDeseosService
  ]
})
export class AppModule {}
