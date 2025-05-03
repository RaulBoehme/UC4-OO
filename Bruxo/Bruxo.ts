import { Feitico } from "./Feitico";
import { CriaturaMagica } from "../CriaturasMagicas/CriaturaMagica";

export class Bruxo extends CriaturaMagica {
    private varinha: string
    private casa: string
    private habilidade: string
    private poderMagico: number

    constructor(nomeConst: string, tipoConst: string, poderConst: number, varinhaConst: string, casaConst: string, habilidadesConst: string, poderMagicoConst: number) {
        super(nomeConst, tipoConst, poderConst);
        this.nome = nomeConst;
        this.varinha = varinhaConst;
        this.casa = casaConst;
        this.habilidade = habilidadesConst;
        this.poderMagico = poderMagicoConst;
    }

    LancarFeitico(feitico: Feitico): void {
        console.log(`${this.nome} lançou o feitiço com a varinha ${this.varinha}`)
        console.log(`Poder Mágico atual: ${this.poderMagico}`)
    }

    UsarMagia(): void {
        console.log(`${this.nome} está usando magia!`);
      }
}

const expelliarmus = new Feitico("Expelliarmus", 100);
const Bruxo1 = new Bruxo("Harry Potter", "Expelliarmus", 100, "Sapugueiro", "Grifinoria", "Fala com cobra", 10)

Bruxo1.LancarFeitico(expelliarmus);




