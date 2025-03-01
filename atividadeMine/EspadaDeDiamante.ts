export class Espada{
    private Dano:number;
    private Durabilidade:number;

    setAtributos(danoEspada:number, durabilidadeEspada:number):void{
        this.Dano = danoEspada;
        this.Durabilidade = durabilidadeEspada
    }



    getAtributos():void{
        `Sua madeira é do tipo ${this.Dano}, e a durabilidade é ${this.Durabilidade}.`
    }
}