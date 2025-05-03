export abstract class CriaturaMagica {
    protected nome: string;
    protected tipo: string;
    protected poder: number;
    constructor(nomeConst: string, tipoConst: string, poderConst: number) {
        this.nome = nomeConst;
        this.tipo = tipoConst;
        this.poder = poderConst;
    }

    abstract UsarMagia(): void;
}