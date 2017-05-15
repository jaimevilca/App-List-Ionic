import { Injectable } from '@angular/core';
import { Lista } from "../clases/lista";

@Injectable()
export class ListaDeseosService {

    listas: Lista[] = [];

    constructor() { 
        // let lista1 = new Lista('Compras del supermercado');
        // let lista2 = new Lista('Juegos de deseo');
        // let lista3 = new Lista('Cosas de la u');


        // this.listas.push(lista1,lista2,lista3);

        // console.log(this.listas);
        this.cargarData();
        console.log('Lista deseos service inicializado'); 
    }

    actualizarData(){
        localStorage.setItem('data', JSON.stringify(this.listas));
    }

    cargarData(){
        if(localStorage.getItem('data')){
            this.listas = JSON.parse(localStorage.getItem('data'));
        }
    }

    agregarLista(lista:Lista){
        this.listas.push(lista);
        this.actualizarData();
    }
    
    borrarLista(idx:number){
        this.listas.splice(idx, 1);
        this.actualizarData();
    }
}