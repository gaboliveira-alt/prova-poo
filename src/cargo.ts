import { CargoType, Requirements } from "./utitls"


export class Cargo {
    
    public readonly type: CargoType
    public readonly weight: number
    public readonly requirements: Requirements[]

    
    constructor(type: CargoType, weight: number) {
        this.type = type
        this.weight = weight
        this.requirements = []
    }
}