import { CorrosivePlanet, RockyPlanet, AquaticPlanet } from "../models/planets";
import { Restrictions } from "../utils/types";
import { randomChoice, randomInt } from "../utils/randomChoice";


function choiceRestriction(id: number): Restrictions {
    let restriction: Restrictions;
    switch (id) {
        case 0:
            restriction = 'ACID_RESISTANT'
            break
        case 1:
            restriction = 'HUMIDITY_SENSITIV'
            break
        case 2:
            restriction =  'NO_LIQUIDS'
            break
    }
    return restriction!
}


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