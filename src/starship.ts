import { Cargo } from "./cargo"
import { PlanetType } from "./utitls"

export abstract class StarShip {
    
    public readonly name: string
    protected speed: number
    protected maxCargo: number
    protected fuelLevel: number
    protected fuelEfficiency: number
    protected currentCargo: number
    protected compatiblePlanets: PlanetType[]

    
    constructor(
        name: string, 
        speed: number, 
        maxCargo: number, 
        fuelLevel: number, 
        fuelEfficiency: number, 
        currentCargo: number,
        compatiblePlanets: PlanetType[]
    ) {
        this.name = name 
        this.speed = speed
        this.maxCargo = maxCargo
        this.fuelLevel = fuelLevel
        this.fuelEfficiency = fuelEfficiency
        this.currentCargo = currentCargo
        this.compatiblePlanets = compatiblePlanets
    }


    abstract canCarry(cargo: Cargo): boolean 

    abstract calculateFuelConsumption(planetDistance: number): number

    
    public travelToDestiny(planetDistance: number): boolean {
        const fuelLoss = this.calculateFuelConsumption(planetDistance)

        if (fuelLoss < this.fuelLevel) {
            this.fuelLevel -= fuelLoss
            return true
        }
        else {
            return false
        }
    }


    public refuel(fuelAmmount: number): void {
        this.fuelLevel = Math.min(this.fuelLevel + fuelAmmount, 100)
    }


    public loadCargo(cargoWeight: Cargo): boolean {
       if (this.canCarry(cargoWeight)) {
        this.currentCargo += cargoWeight.weight
        return true
       }

       return false
    }


    public unloadCargo(): void {}
}