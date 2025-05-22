import { CorrosivePlanet, RockyPlanet, AquaticPlanet } from "../models/planets"
import { randomInt } from "../utils/randomChoice"


export class CreatePlanet {

    static createCorrosivePlanet(name: string) {
        const distance: number = randomInt(10, 100)

        const corrosivePlanet = new CorrosivePlanet(name, distance, 'ACID_RESISTANT')
        return corrosivePlanet
    }


    static createRockyPlanet(name: string) {
        const distance: number = randomInt(10, 100)
    
        const rockyPlanet = new RockyPlanet(name, distance, 'NO_LIQUIDS');
        return rockyPlanet
    }

    
    static createAquaticPlanet(name: string) {
        const distance: number = randomInt(10, 100)

        const aquaticPlanet = new AquaticPlanet(name, distance, 'HUMIDITY_SENSITIV');
        return aquaticPlanet;
    }
}