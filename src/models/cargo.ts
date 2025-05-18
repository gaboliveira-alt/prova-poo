import { CargoType, Requirements } from "../utils/types"


export class Cargo {
    
    public readonly type: CargoType
    public readonly weight: number
    public readonly requirements: Requirements

    
    constructor(type: CargoType, weight: number, requirements: Requirements) {
        this.type = type
        this.weight = weight
        this.requirements = requirements
    }
}