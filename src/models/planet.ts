import { Cargo } from "./cargo"
import { PlanetType, Restrictions } from "../utils/utils"
import { isCompatible } from "../utils/isCompatible"

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
}