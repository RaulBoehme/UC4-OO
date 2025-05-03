import { CriaturaMagica } from "./CriaturaMagica";

export class Fenix extends CriaturaMagica {
    
    UsarMagia(): void {
        console.log("A fenix cuspiu fogo")
    }
}

let fenix2 = new Fenix("fawkes", "fogo", 800)
fenix2.UsarMagia()