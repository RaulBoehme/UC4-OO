import { student } from "./student";

export class avalicao {
    private aluno :student
    private data:number
    private peso:number
    private altura: number
    private IMC: number  
    private observacao: string
    
    constructor(aluno:student, data:number, peso:number, altura:number, imc:number, observacao:string){
        this.aluno = aluno
        
    }
}