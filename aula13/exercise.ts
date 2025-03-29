export class exercicios {
   private nome:string
   private series:number
   private repeticoes:number
   private Carga:number

   public constructor(nome:string, serie:number, repeticoes:number, carga:number){
        this.nome = nome
        this.series = serie
        this.repeticoes = repeticoes
        this.Carga = carga
    }
}
