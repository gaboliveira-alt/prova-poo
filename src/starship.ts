import { Cargo } from "./cargo"
import { Planet } from "./planet"

export abstract class StarShip {
    
    public readonly name: string
    protected speed: number
    protected maxCargoload: number
    protected fuelLevel: number
    protected fuelEfficiency: number
    protected currentCargoload: number

    
    constructor(name: string, speed: number, maxCargoload: number, fuelLevel: number, fuelEfficiency: number, currentCargoload: number) {
        this.name = name
        this.speed = speed
        this.maxCargoload = maxCargoload
        this.fuelLevel = fuelLevel
        this.fuelEfficiency = fuelEfficiency
        this.currentCargoload = currentCargoload
    }


    abstract canCarry(cargo: Cargo): boolean 

    abstract calculateFuelConsumption(planetDistance: number): number 


    public loadCargo(cargoWeight: Cargo): boolean {
       if (this.canCarry(cargoWeight)) {
        this.currentCargoload += cargoWeight.weight
        return true
       }
       return false
    }


    public unloadCargo(): void {}
}