import { Usuario } from "./Usuario"

export class instrutor extends Usuario {
    private especialidade:string
    private cref:number 

    constructor(nome:string, email:string, especialidade:string, cref:number){
        super(nome,email)
        this.especialidade = especialidade
        this.cref = cref    
    }
}