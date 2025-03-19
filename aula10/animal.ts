export class Animal {
    protected name : string;
    protected weight: number;
    public especie: string;
    protected fome: string;
    protected sede: string;

    constructor(nameConst:string,  weightConst:number, especieConst: string, fomeConst:string, sedeConst:string){
        this.name = nameConst;
        this.weight = weightConst;
        this.especie = especieConst;
        this.fome = fomeConst;
        this.sede = sedeConst;
    }

    getNome():string{
        return this.name;
    }
    
    public buscarRecurso():void{

    }

    public emitirSom():void{

    }

    public mover() {}

    public eat(quantity:number):void{
        console.log("The animal has eaten: "+quantity); //concatenação
        console.log(`The animal has eaten: ${quantity}`)
    }
}