import { Relacionavel } from "./Relacionavel";

export class Pessoa implements Relacionavel{

    private nome:String ;
    private sobrenome:String;
    private dataNascimento:Number;
    private genero:String;
    private outrasRelacoes:Relacionavel[] = []

    descreverRelacao():string {
        return
    }
    
    public constructor(nome:string,  sobrenome:String,  dataNascimento:Number,  genero:String, outrasRelacoes:Relacionavel[]) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataNascimento = dataNascimento;
        this.genero = genero;
        this.outrasRelacoes = outrasRelacoes;
    }

    
    public getNome():string {
        return nome;
    }

    public setNome(nome:string) {
        this.nome = nome;
    }

    public getSobrenome():String {
        return this.sobrenome;
    }

    public setSobrenome(sobrenome:String ) {
        this.sobrenome = sobrenome;
    }

    public  getDataNascimento():Number {
        return this.dataNascimento;
    }

    public setDataNascimento( dataNascimento:Number) {
        this.dataNascimento = dataNascimento;
    }

    public getGenero():String {
        return this.genero;
    }

    public setGenero( genero:String) {
        this.genero = genero;
    }

    public getOutrasRelacoes():Relacionavel[] {
        return this.outrasRelacoes;
    }

    public setOutrasRelacoes(outrasRelacoes:Relacionavel[] ) {
        this.outrasRelacoes = outrasRelacoes;
    }
    

}