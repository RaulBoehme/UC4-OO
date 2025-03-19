import { Cat } from "./cat";
import { Animal } from "./animal";
import { Capivara } from "./capivara";

let listaAnimais: Animal[];

let meuGato = new Cat("Pipoca",4,"mamifero",100,100)
let minhaCapi = new Capivara("Clovis",10,"manifero",100,100);

listaAnimais.push(meuGato);
listaAnimais.push(minhaCapi)


function interagir(animal1:Animal,animal2:Animal){
    console.log(`O animal ${animal1.getNome()} interagiu com o animal ${animal2.getNome()}`)
}

for( let i:number = 0; i<2; i++){
    interagir(listaAnimais[i], listaAnimais[i+1])
}