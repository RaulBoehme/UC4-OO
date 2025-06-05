class Deck <T>{
    private elementos: T[] = [];
    adicionarNoInicio(item: T):void{
        this.elementos.unshift(item);
        }
    adicionarNoFinal(item:T):void{
        this.elementos.push(item);
    }
    removerDoInicio():T|undefined {
        return this.elementos.shift();
    }
    removerDoFinal():T|undefined{
        return this.elementos.pop();
    }
    primeiro():T|undefined{
        return this.elementos[0];
    }
    ultimo():T|undefined{
        return this.elementos[this.elementos.length-1];
    }
    estaVazio():boolean{
        return this.elementos.length === 0;
    }
    tamanho():number{
        return this.elementos.length;
    }
    limpar():void{
        this.elementos = [];}
    }

    const meuDeck = new Deck<number>();
    meuDeck.adicionarNoInicio(1);
    meuDeck.adicionarNoInicio(2)
    meuDeck.adicionarNoInicio(3);
    meuDeck.adicionarNoInicio(4);
    console.log()