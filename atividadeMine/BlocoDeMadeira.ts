export class BlocoDeMadeira{
    private tipo:string;
    private Durabilidade:number;
    
    constructor(){
        
    }

    setAtributos(tipoMadeira:string, durabilidadeMadeira:number):void{
        this.tipo = tipoMadeira
        this.Durabilidade = durabilidadeMadeira
    }



    getAtributos():void{
        `Sua madeira é do tipo ${this.tipo}, e a durabilidade é ${this.Durabilidade}.`
    }
}

const madeira = new BlocoDeMadeira
madeira.setAtributos("Distorcida", 5)
madeira.getAtributos()
