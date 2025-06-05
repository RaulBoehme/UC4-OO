import { Carta } from "./Carta";

export class Item extends Carta{
    private efeito:string;

    constructor(efeito:string, nomePkm, tipoPkm){
        super(nomePkm, tipoPkm)
        this.efeito = efeito
    }
    

}