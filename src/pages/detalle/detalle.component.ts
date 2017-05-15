import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from "ionic-angular";

import { Lista, ListaItem } from "../../app/clases/index";
import { ListaDeseosService } from "../../app/services/lista-deseos.service";

import { AlertController } from 'ionic-angular';

@Component({
    selector: 'app-detalle',
    templateUrl: 'detalle.component.html'
})

export class DetalleComponent implements OnInit {
    idx: number;
    lista: Lista;

    constructor(
         public navCtrl: NavController, 
         public navParams: NavParams ,
         public listaDeseosService: ListaDeseosService,
         public alertCtrl: AlertController
    ) { 
        this.idx = this.navParams.get('idx');
        this.lista = this.navParams.get('lista');
    }

    ngOnInit() { }

    actualizar(item: ListaItem) {
        item.completado = !item.completado;


        let todosMarcados = true;
        for(let item of this.lista.items){
            if(!item.completado){
                todosMarcados = false;
                break;
            }

        }


        this.lista.terminado = todosMarcados;

        this.listaDeseosService.actualizarData();
    }

    borrarItem(){
        let confirm = this.alertCtrl.create({
      title: this.lista.nombre,
      message: '¿Esta seguro que desea eliminar la lista?',
      buttons: ['Cancelar',
        {
          text: 'Eliminar',
          handler: () => {
            // console.log('Agree clicked');
            this.listaDeseosService.borrarLista(this.idx);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
    }
}