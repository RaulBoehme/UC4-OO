import { Carta } from "./Carta";

export class pokemon extends Carta{
    private nomeTreinador:string
    private efeito:string;

    constructor(nomePkm, tipoPkm, nomeTreinador:string, efeito:string ){
    
    super(nomePkm, tipoPkm)
    this.efeito = efeito;
    this.nomeTreinador = nomeTreinador;
    }
}