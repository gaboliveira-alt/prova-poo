import { Cargo } from "./cargo"
import { PlanetType, Restrictions } from "../utils/types"
import { checkCargoCompatible } from "../utils/isCompatible"

export abstract class Planet {
    
    public readonly name: string
    public readonly type: PlanetType
    public readonly distancefromEarth: number
    protected restrictions: Restrictions


    constructor(name: string, type: PlanetType, distancefromEarth: number, restrictions: Restrictions) {
        this.name = name
        this.type = type
        this.distancefromEarth = distancefromEarth
        this.restrictions = restrictions
    }

    
    public acceptsCargo(cargoShip: Cargo): boolean {
        return checkCargoCompatible(this.restrictions, cargoShip.requirements)
    }
}