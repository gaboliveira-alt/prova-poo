import { Cargo } from "./cargo"
import { Restrictions } from "./utitls"

export abstract class Planet {

    public readonly name: string
    public readonly type: string
    protected distancefromEarth: number
    protected restrictions: Restrictions[]


    constructor(name: string, type: string, distancefromEarth: number, restrictions: Restrictions[]) {
        this.name = name
        this.type = type
        this.distancefromEarth = distancefromEarth
        this.restrictions = restrictions
    }

    public acceptsCargp(cargoShip: Cargo): boolean {
        return false
    }
}