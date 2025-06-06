import { Cargo } from "./cargo"
import { PlanetType } from "../utils/types"

export abstract class StarShip { 
    public readonly name: string
    protected speed: number
    protected maxCargo: number
    public fuelLevel: number
    protected fuelEfficiency: number
    public currentCargo: number
    public readonly compatiblePlanets: PlanetType[]

    
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

        if (fuelLoss <= this.fuelLevel) {
            this.fuelLevel -= fuelLoss
            return true
        }
        else {
            return false
        }
    }

    public resetCargo(): void {
        this.currentCargo = 0
    }


    public loadCargo(cargoWeight: Cargo): boolean {
        if (this.canCarry(cargoWeight)) {
            this.currentCargo += cargoWeight.weight
            return true
       }

       return false
    }


    public unloadCargo(): void {
        if (this.currentCargo === 0) {
            return
        }
        else {
            this.currentCargo = 0
        }
    }
}