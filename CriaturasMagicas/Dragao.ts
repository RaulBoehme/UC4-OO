import { CriaturaMagica } from "./CriaturaMagica";

export class Dragao extends CriaturaMagica {

    UsarMagia(): void {
        console.log("O dragao usou bola de fogo")
    }
}

let dragao2 = new Dragao("ponto de flecha sueco", "fogo", 1000)
dragao2.UsarMagia()