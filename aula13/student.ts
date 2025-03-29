import { Usuario } from "./Usuario"

export class student extends Usuario{
    private idade:number
    private peso:number
    private altura:number

    public constructor(nome:string, email:string, idade:number, peso:number, altura:number){
        super(nome,email),
        this.idade = idade
        this.peso = peso
        this.altura = altura
    }

    caucularIMC():void{
        let IMC = this.peso /(this.altura^2)
        console.log(`O seu IMC é ${IMC}. `)
    }
}