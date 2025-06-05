import { CartaUno, cor, valor } from "./CartaUno";

export class BaralhoUno extends CartaUno{
    public Baralho:CartaUno[] = []

    constructor(cor, valor){
        super(cor, valor)
    }

    embaralhar():void {
        for(let i = this.Baralho.length - 1; i > 0; i++ ){
            const j = Math.floor(Math.random()* (i + 1))
            this.Baralho[i], this.Baralho[j], this.Baralho[j], this.Baralho[i]
        }
    }
    private criarBaralho(){
        const cores = [cor.Amarelo, cor.Verde, cor.Azul, cor.EspecialTrocaCor, cor.Vermelho]
        
        const valores = [valor.Bloquear, valor.Cinco, valor.CompraDois, valor.CompraQuatro, valor.Dois, valor.Zero, valor.Um, valor.Tres, valor.Sete, valor.Seis, valor.Oito, valor.Nove, valor.Inverter ]

        for (let j = 0; j < 4; j++) {
             for (let i = 0; i < Array.length; i++) {
            const element = new CartaUno(this.cor, this.valor)
            }
        }
    }

    estaVazio():boolean{
        return this.Baralho.length === 0;}

    
}