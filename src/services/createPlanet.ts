import { CorrosivePlanet, RockyPlanet, AquaticPlanet } from "../models/planets";
import { Restrictions } from "../utils/utils";
import { randomChoice, randomInt } from "../utils/randomChoice";
import { planets } from "../models/planets";

function choiceRestriction(qty: number): Restrictions[] {
    const result: Restrictions[] = []
    for (let i = 0; i < qty; i++) {
        let temp = randomChoice([Restrictions.ACID_RESISTANT, Restrictions.HUMIDITY_SENSITIV, Restrictions.NO_LIQUIDS]);

        if (!result.includes(temp)) {
            result.push(temp)
        }
    }
    return result;
}

export class CreatePlanet {
    static createCorrosivePlanet(name: string) {
        const distance: number = randomInt(10, 100);
        const qtyRestrictions: number = randomInt(0, 2);
        const restrictions: Restrictions[] = choiceRestriction(qtyRestrictions);

        const corrosivePlanet = new CorrosivePlanet(name, distance, restrictions);
        planets.push(corrosivePlanet);
        return corrosivePlanet;
    };

    static createRockyPlanet(name: string) {
        const distance: number = randomInt(10, 100);
        const qtyRestrictions: number = randomInt(0, 2);
        const restrictions: Restrictions[] = choiceRestriction(qtyRestrictions);

        const rockyPlanet = new RockyPlanet(name, distance, restrictions);
        planets.push(rockyPlanet);
        return rockyPlanet;
    };

    static createAquaticPlanet(name: string) {
        const distance: number = randomInt(10, 100);
        const qtyRestrictions: number = randomInt(0, 2);
        const restrictions: Restrictions[] = choiceRestriction(qtyRestrictions);

        const aquaticPlanet = new AquaticPlanet(name, distance, restrictions);
        planets.push(aquaticPlanet);
        return aquaticPlanet;
    };
}