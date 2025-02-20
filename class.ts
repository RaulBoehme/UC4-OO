export class Cat{
    //Atributo 
    name:string;
    weight:number;

    //constructor
    constructor(nameCat:string, weightCat:number){
        this.name=nameCat
        this.weight=weightCat
    }

    //Métodos
    meow():void{
        console.log("Miau Miau")
    }

    eat(quantity:number):void{
        console.log("the cat has eaten "+quantity);
    }


}

const meuGato = new Cat("Panda", 3.5);
meuGato.meow
meuGato.eat(150)