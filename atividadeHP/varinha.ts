export class Varinha{
    private madeira:string;
    private nucleo:string
    private tamanho:number 

    setmadeira(tipoMadeira:string):void{
        this.madeira = tipoMadeira
    }
    getMadeira():string{return this.madeira}

    setNucleo(tipoNucleo:string):void{
        this.nucleo = tipoNucleo
    }
    setTamanho(tipoTamanho:number):void{
        this.tamanho = tipoTamanho
    }
    getTamanho():number{return this.tamanho}

    // Métodos
    exibirDetalhes():void{
        console.log(`Esta varinha é feita de ${this.madeira}, o núcleo é de ${this.nucleo} e o tamanho é ${this.tamanho}cm.`)
    }
}

const bolaDeFogo = new Varinha()
bolaDeFogo.setmadeira("Teixo")
bolaDeFogo.setNucleo("Fibra de coração de dragao")
bolaDeFogo.setTamanho(22)
bolaDeFogo.exibirDetalhes()
