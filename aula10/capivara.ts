import { Animal } from "./animal";

export class Capivara extends Animal{

    constructor(name:string, weight:number, especie:string, fome:string, sede:string){
        super(name, weight, especie, fome, sede)
    }

    public emitirSom(): void {
        console.log("ahn ahn")
    }

    public buscarRecurso(): void {
        console.log("Mordeu um cacho de bananas")
    }

    public mover(): void {
        console.log("foi até a grama")
    }
    
}

