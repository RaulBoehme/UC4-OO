import { Carta } from "./Carta";


export class Baralho {
    private Baralho: Carta[] = [];

    constructor(cartasIniciais: Carta[]) {
        this.Baralho = cartasIniciais;
    };



    embaralhar(): void {
        const array = this.Baralho
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        this.Baralho = array
    };


    addCarta(item: Carta): void { this.Baralho.push(item); };

    comprarCarta(): Carta | undefined { return this.Baralho.pop(); };

    visualizarTopo(): Carta | undefined { return this.Baralho[this.Baralho.length - 1]; };

    visualizarTudo(): void {
        for (let i = 0; i < this.Baralho.length; i++) {
            this.Baralho[i].exibirCarta();
        }
    }

    tamanho(): number { return this.Baralho.length; };

    jogarForaOBaralho(): void { this.Baralho = []; };
}