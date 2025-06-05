import { Carta } from "./Carta";

export class energia extends Carta{
    private tipoEnergia:String

    constructor(tipoEnergia:string, nomePkm:string, tipoPkm:string ){
    super(nomePkm, tipoPkm)
    this.tipoEnergia = tipoEnergia;
    }
}