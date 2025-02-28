export class ChapeuSeletor{
    private casa:string

    selecionarCasa():void{
        let numero:number = Math.floor(Math.random()*4+1)

        if (numero === 1) {
            this.casa = `Grifinória!`
        } else if (numero === 2){
            this.casa = `Sonserina!`
        } else if (numero === 3){
            this.casa = `CORVINAL!`
        } else if (numero === 4){
            this.casa = `Lufa Lufa`
        } else{
            console.log(" Ixi, deu erro!!")
        }
    }
    exibirCasa():void{
        console.log(`Este aluno vai para a casa de ${this.casa}`)
    }
}

const novoAluno = new ChapeuSeletor()
novoAluno.selecionarCasa()
novoAluno.exibirCasa()