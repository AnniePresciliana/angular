import { Component } from '@angular/core';
import { Auto } from './auto';
import { AutoService } from './auto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'program';

newAuto : Auto;
autos: Auto [] = [];
showErrorTipo : boolean = false;
showErrorMarca : boolean = false;
showErrorModelo : boolean = false;
showErrorCor : boolean = false;
showErrorFabricacao : boolean = false;

constructor (private autoService : AutoService){
  
  this.autos = autoService.getAll();
  this.newAuto = new Auto();

}
save(){
  console.log('aquii');
  if(this.isValidAuto()){

    if(!this.newAuto.id){
      this.autoService.save(this.newAuto);
      this.newAuto.id = (new Date().getTime());
    }
    else{
      this.autoService.update(this.newAuto)
    }
    
    this.newAuto = new Auto();
  }
}

isValidAuto(){
  this.showErrorTipo = false;
  this.showErrorMarca = false;
  this.showErrorModelo = false;
  this.showErrorCor = false;
  this.showErrorFabricacao = false;

  if (!this.newAuto.tipo || this.newAuto.tipo.trim() === '') {
    this.showErrorTipo = true;
  }

  if (!this.newAuto.marca || this.newAuto.marca.trim() === '') {
    this.showErrorMarca = true;
  }

  if (!this.newAuto.modelo || this.newAuto.modelo.trim() === '') {
    this.showErrorModelo = true;
  }

  if (!this.newAuto.cor || this.newAuto.cor.trim() === '') {
    this.showErrorCor = true;
  }

  if (!this.newAuto.fabricacao || this.newAuto.fabricacao.toString().trim() === '') {
    this.showErrorFabricacao = true;
  }

  return !this.showErrorTipo && !this.showErrorMarca && !this.showErrorModelo && !this.showErrorCor && !this.showErrorFabricacao;

}
  delete( auto: Auto){
    this.autoService.delete(auto);
  }
  edit(auto : Auto){
    this.newAuto = new Auto (auto.id,auto.tipo,auto.marca,auto.modelo,auto.cor,auto.fabricacao);

}

}

