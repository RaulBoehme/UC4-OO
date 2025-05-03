import { CriaturaMagica } from "./CriaturaMagica";

export class Unicornio extends CriaturaMagica {
    
    UsarMagia(): void {
        console.log("O unicornio usou magia de cura")
    }
}

let unicornio2 = new Unicornio("unicornio", "cura", 1500)
unicornio2.UsarMagia()