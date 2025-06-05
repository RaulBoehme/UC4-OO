import { Carta } from "./Carta";


export class pokemon extends Carta{
    private attack:string;
    private HP:number;

    constructor(attackPkm:string, HpPkm:number, nomePkm:string, tipoPkm:string ){
    
    super(nomePkm, tipoPkm)
    this.attack = attackPkm;
    this.HP = HpPkm;
    }
}