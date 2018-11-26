export class Auto{

    id : number;

    tipo : string;
    marca : string;
    modelo : string;
    cor : string;
    fabricacao : Date;
    

    constructor(id?:number,tipo?:string,marca?:string,
       modelo?:string,cor?:string,fabricacao?:Date){

            this.id = id;
            this.tipo = tipo;
            this.marca = marca;
            this.modelo = modelo;
            this.cor = cor;
            this.fabricacao = fabricacao;
            
    }
}  