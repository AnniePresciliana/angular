import { Injectable } from '@angular/core';
import { Auto } from './auto';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  private autos: Auto[] = [];

  constructor() {}

    getAll(){
      return this.autos;

    }

    save(auto: Auto){
      this.autos.push(auto);

    }
    update(auto : Auto){
      let oldAuto = this.autos.find(s => s.id === auto.id);
      oldAuto.tipo = auto.tipo;
      oldAuto.marca = auto.marca;
      oldAuto.modelo = auto.modelo;
      oldAuto.cor = auto.cor;
      oldAuto.fabricacao = auto.fabricacao;

    }

    delete (auto : Auto) {
  let index = this.autos.indexOf(auto);
  this.autos.splice(index, 1)
    }
    
  }

