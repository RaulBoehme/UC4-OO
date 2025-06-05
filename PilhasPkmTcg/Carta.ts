export class Carta{
    private nome: string;
    private tipo: string;

    constructor(nomePkm:string, tipoPkm:string){
        this.nome = nomePkm;
        this.tipo = tipoPkm;
    }

    exibirCarta():void{
        console.log(`A sua carta ${this.nome}, é do tipo: ${this.tipo}.`)
    }
}