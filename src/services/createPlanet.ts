import { CorrosivePlanet, RockyPlanet, AquaticPlanet } from "../models/planets";
import { Restrictions } from "../utils/types";
import { randomChoice, randomInt } from "../utils/randomChoice";


function choiceRestriction(id: number): Restrictions {
    let restriction: Restrictions;
    switch (id) {
        case 0:
            restriction = 'ACID_RESISTANT'
        case 1:
            restriction = 'HUMIDITY_SENSITIV'
        case 2:
            restriction =  'NO_LIQUIDS'
    }
    return restriction!
}


export class CreatePlanet {

    static createCorrosivePlanet(name: string) {
        const distance: number = randomInt(100, 10000)
        const qtyRestrictions: number = randomInt(0, 2)
        const restrictions: Restrictions[] = []


        for (let i = 0; i < qtyRestrictions; i++) {
            const temp: number = randomChoice(['ACID_RESISTANT', 'HUMIDITY_SENSITIV', 'NO_LIQUIDS'])

            if (!restrictions.includes(choiceRestriction(temp))) {
                restrictions.push(choiceRestriction(temp))
            }
        }


        const corrosivePlanet = new CorrosivePlanet(name, distance, restrictions)
        return corrosivePlanet
    }


    static createRockyPlanet(name: string) {
        const distance: number = randomInt(100, 10000)
        const qtyRestrictions: number = randomInt(0, 2)
        const restrictions: Restrictions[] = []

        
        for (let i = 0; i < qtyRestrictions; i++) {
            const temp = randomChoice(['ACID_RESISTANT', 'HUMIDITY_SENSITIV', 'NO_LIQUIDS'])

            if (!restrictions.includes(choiceRestriction(temp))) {
                restrictions.push(choiceRestriction(temp))
            }
        }

        
        const rockyPlanet = new RockyPlanet(name, distance, restrictions);
        return rockyPlanet
    }

    
    static createAquaticPlanet(name: string) {
        const distance: number = randomInt(100, 10000)
        const qtyRestrictions: number = randomInt(0, 2)
        const restrictions: Restrictions[] = []

        
        for (let i = 0; i < qtyRestrictions; i++) {
            const temp = randomChoice(['ACID_RESISTANT', 'HUMIDITY_SENSITIV', 'NO_LIQUIDS']);

            if (!restrictions.includes(choiceRestriction(temp))) {
                restrictions.push(choiceRestriction(temp));
            }
        }

        
        const aquaticPlanet = new AquaticPlanet(name, distance, restrictions);
        return aquaticPlanet;
    }
}