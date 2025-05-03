class Pilha<T>{
    private elementos:T[]=[];
    //Colocar item dentro da pilha
    push(item:T):void{
        this.elementos.push(item);
    }
    // Apaga o último item da pilha 
    pop():T|undefined{
        return this.elementos.pop();
    }
    // Busca um elemento
    peek():T| undefined{
        return this.elementos[this.elementos.length -1];
    }

    isEmpty():boolean{
        return this.elementos.length === 0
    }

    size():number{
       return this.elementos.length
    }

    clear(){
        this.elementos = []
    }
}



const minhaPilha = new Pilha<number>()
minhaPilha.push(1)
minhaPilha.push(2)
minhaPilha.push(3)

console.log(minhaPilha.pop())
minhaPilha.push(43)
console.log(minhaPilha.peek())
console.log(minhaPilha.isEmpty())
console.log(minhaPilha.size())
console.log(minhaPilha.clear())