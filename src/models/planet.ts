import { Cargo } from "./cargo"
import { PlanetType, Restrictions } from "../utils/utils"
import { isCompatible } from "../utils/isCompatible"
import { Convert } from "../utils/convertToName"

export abstract class Planet {
    public readonly name: string
    public readonly type: PlanetType
    protected distancefromEarth: number
    protected restrictions: Restrictions[]


    constructor(name: string, type: PlanetType, distancefromEarth: number, restrictions: Restrictions[]) {
        this.name = name
        this.type = type
        this.distancefromEarth = distancefromEarth
        this.restrictions = restrictions
    }

    public acceptsCargo(cargoShip: Cargo): boolean {
        for (const restriction of this.restrictions) {
            if (!isCompatible(restriction, cargoShip.requirements)) {
                return false;
            }
        }
        return true;
    }

    public showPlanet() {
        let planetType: string;

        switch (this.type) {
            case 0:
                planetType = 'CorrosivePlanet';
                break;
            case 1:
                planetType = 'RockyPlanet'
                break;
            case 2:
                planetType = 'AquaticPlanet';
                break;
        }
        
        const restrictions: string[] = []
        for (let i of this.restrictions) {
            const restriction = Convert(i);
            restrictions.push(restriction);
        }
        console.log('Planet name:', this.name);
        console.log('Planet type:', planetType!);
        console.log('Planet distance from Earth:', this.distancefromEarth);
        console.log('Planet restrictions:', restrictions);
    }
}