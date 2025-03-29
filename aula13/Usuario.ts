export class Usuario{
    protected nome:string
    protected email:string

    constructor(nome:string, email:string){
        this.nome = nome
        this.email = email
    }

    exibirInformações():void{
        console.log(`Nome : ${this.nome}.
        Email : ${this.email}.`)
    }
}