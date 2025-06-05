import { personagem } from "./personagemTemporal";

export class fila {
    private personagens: personagem[] = []

    
    enfileirar(personagem: personagem): void {
        this.personagens.push(personagem);
    }

    desenfileirar(): personagem | undefined {
        if (this.estaVazia()) {
            console.log("A fila está vazia.");
            return undefined
        } return this.personagens.shift();
    }

    primeiro(): personagem | undefined {
        if (this.estaVazia()) {
            console.log("A fila está vazia.");
            return undefined;
        }
        return this.personagens[0];
    }
    estaVazia(): boolean {
        return this.personagens.length === 0;
    }
    tamanho(): number {
        return this.personagens.length;
    }
    exibirFila():void{
        console.table(this.personagens)
    }
}

let peem = new personagem("Cosmic Ghost Rider", "Terra-TRN666", 4)
console.log(peem.exibirInfo)
peem.assinaturaTemporal

let pem = new personagem("csc", "terra", 43)
pem.exibirInfo