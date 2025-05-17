import { Cargo } from "./cargo"
import { PlanetType } from "../utils/utils"

export abstract class StarShip { 
    public readonly name: string
    protected type: 'StarDestroyer' | 'TieExplorer' | 'GR75MediumTransport';
    protected speed: number
    protected maxCargo: number
    protected fuelLevel: number
    protected fuelEfficiency: number
    protected currentCargo: number
    protected compatiblePlanets: PlanetType[]
    
    constructor(
        name: string,
        type: 'StarDestroyer' | 'TieExplorer' | 'GR75MediumTransport', 
        speed: number, 
        maxCargo: number, 
        fuelLevel: number, 
        fuelEfficiency: number, 
        currentCargo: number,
        compatiblePlanets: PlanetType[]
    ) {
        this.name = name
        this.type = type 
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

    public showShip() {
        console.log('--------------------------------------------------');
        console.log('StarShip name:', this.name);
        console.log('StarShip type:', this.type);
        console.log('StarShip speed:', this.speed);
        console.log('StarShip max Cargo:', this.maxCargo);
        console.log('StarShip fuel Level:', this.fuelLevel);
        console.log('StarShip fuel Efficiency:', this.fuelEfficiency);
        console.log('StarShip current Cargo:', this.currentCargo);
        console.log('StarShip compatible Planets:', this.compatiblePlanets);
    }
}