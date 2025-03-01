export class Personagem{
    private vida:number;
    private força:number;
    private inventario:Array<Object>

    constructor(vida:number, força:number, inventario:Array<Object>){
        this.vida = vida;
        this.força = força;
        this.inventario = inventario
    }

    setAtributos(vidaPersonagem:number, forçaPersonagem:number, inventarioPersonagem:Array<Object>){
        this.vida = vidaPersonagem
        this.força = forçaPersonagem
        this.inventario = inventarioPersonagem
    }
    getAtributos():void{
        console.log(`Você tem ${this.vida} de vida, ${this.força} de força`)
        for (let i = 0; i <this.inventario.length; i++){
            console.log(`\n${[i+1]}.${this.inventario[i]}`)
        }
    }
}
const Steve = new Personagem(20, 1, ['Espada de pedra', 'Bife', 'Melancia'])
Steve.setAtributos(20, 1, ['Espada de pedra', 'Bife', 'Melancia'])
Steve.getAtributos()