export class Feitico {
    nome: string;
    PoderFeitico: number;

    constructor(nome: string, PoderFeit: number) {
        this.nome = nome
        this.PoderFeitico = PoderFeit
    }

    lançar(): void {
        console.log(`O feitiço foi ${this.nome} foi lançado com o poder de ${this.PoderFeitico}  `);
    }
}

let feitico1 = new Feitico("Avada Kedavra", 100)
let feitico2 = new Feitico("Aguamenti", 45)
let feitico3 = new Feitico("Confringo", 75)
let feitico4 = new Feitico("Crucio", 93)
let feitico5 = new Feitico("Rictusempra", 22)
let feitico6 = new Feitico("Petrificus Totalus", 35)
let feitico7 = new Feitico("Sectumsempra", 15)