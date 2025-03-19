import { Animal } from "./animal";

export class Cat extends Animal{
    
    constructor(name:string, weight:number, especie:string, fome:string, sede:string){
        super(name, weight, especie, fome, sede);
    }

    miadoExagerado():void{
        console.log("MIAAUUUUU")
    }

    meow():void{
        this.eat
        console.log("Meow")
    }
    
}

function realizaAcao(qualquerAnimal:Animal){
qualquerAnimal.eat(1)}

let myCat = new Cat("Coisinha", 5, "tigrado", "Pouca Fome", "Pouca sede" );
realizaAcao(myCat)
