export class LugaresMagicos{
 private nome: string
 protected andares: number
 protected desafios: string

 
 constructor(nomeConst:string,andaresConst:number,desafiosConst:string){
    this.nome = nomeConst
    this.andares = andaresConst
    this.desafios = desafiosConst
}

    setNome(novoNome:string):void{
        this.nome = this.nome
    }
    setAndares(andar:number):void{
        this.andares = this.andares
    }
    setDesafios(desaf:string):void{
        this.desafios = this.desafios
    }
    getNome(){
        return this.nome
    }
    getAndares(){
        return this.andares
    }
    getDesafios(){
        return this.desafios
    }   
    
Exibir():void{
    console.log(`Lugar : ${this.nome}`)
    console.log(`Andares : ${this.andares}`)
    console.log(`Desafio : ${this.desafios}`)

}    

}
const TorreCorvinal = new LugaresMagicos("Torre da Corvinal",3,"Responda a pergunta enigmatica para entrar na sala comunal")
TorreCorvinal.Exibir()