export class personagem{
    private nome:string;
    private universo:string;
    public assinaturaTemporal:number

    constructor(nome:string, universo:string, assinaturaTemp:number){
        this.nome = nome;
        this.universo = universo;
        this.assinaturaTemporal = assinaturaTemp
    }

    exibirInfo():void{
        console.log(` O personagem ${this.nome}, veio do universo ${this.universo}. Assinatura temporal ${this.assinaturaTemporal}.`)
    }
}

const peem = new personagem("Cosmic Ghost Rider", "Terra-TRN666", 4)
peem.exibirInfo