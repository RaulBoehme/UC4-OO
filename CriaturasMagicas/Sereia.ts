import { CriaturaMagica } from "./CriaturaMagica";

export class Sereia extends CriaturaMagica {
    
    UsarMagia(): void {
        console.log("A sereia hipnotizou o bruxo")
    }
}

let sereia2 = new Sereia("sereia", "agua", 500)
sereia2.UsarMagia()