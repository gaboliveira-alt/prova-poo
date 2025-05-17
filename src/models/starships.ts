import { Cargo } from "./cargo";
import { StarShip } from "./starship";
import { PlanetType } from "../utils/types";


class StarDestroyer extends StarShip {

    private static speed: number = 0.6
    private static maxLoad: number = 5000
    private static fuelLevel: number = 100
    private static fuelEfficieny: number = 1.2
    private static currentLoad: number = 0
    private static compatiblePlanet: PlanetType[] = ['CORROSIVE']

    
    constructor(name: string) {
        super(
            name, 
            StarDestroyer.speed, 
            StarDestroyer.maxLoad, 
            StarDestroyer.fuelLevel, 
            StarDestroyer.fuelEfficieny, 
            StarDestroyer.currentLoad,
            StarDestroyer.compatiblePlanet
        )
    }


    public canCarry(cargo: Cargo): boolean {
        const destroyerMaxCargo = this.maxCargo

        if (cargo.type === 'INDUSTRIAL_EQUIPMENT') {
            if (cargo.weight <= destroyerMaxCargo) {
                return true
            }
        }

        return false
    }


    public calculateFuelConsumption(planetDistance: number): number {
        return planetDistance * this.speed * (this.currentCargo / this.maxCargo)
    }
}


class TieExplorer extends StarShip {

    private static speed: number = 1.5
    private static maxLoad: number = 200
    private static fuelLevel: number = 100
    private static fuelEfficieny: number = 0.4
    private static currentLoad: number = 0
    private static compatiblePlanet: PlanetType[] = ['AQUATIC']


    constructor(name: string) {
        super(
            name,
            TieExplorer.speed,
            TieExplorer.maxLoad,
            TieExplorer.fuelLevel,
            TieExplorer.fuelEfficieny,
            TieExplorer.currentLoad,
            TieExplorer.compatiblePlanet
        )
    }


    public canCarry(cargo: Cargo): boolean {
        const tieExplorermaxCargo = this.maxCargo

        if (cargo.type === 'BIOTECH') {
            if (cargo.weight <= tieExplorermaxCargo) {
                return true
            }
        }

        return false
    }


    public calculateFuelConsumption(planetDistance: number): number {
        return planetDistance * this.speed
    }
}


class GR75MediumTransport extends StarShip {
    
    private static speed: number = 0.5
    private static maxLoad: number = 3000
    private static fuelLevel: number = 100
    private static fuelEfficieny: number = 0.7
    private static currentLoad: number = 0
    private static compatiblePlanet: PlanetType[] = ['ROCKY']

    constructor(name: string) {
        super(
            name,
            GR75MediumTransport.speed,
            GR75MediumTransport.maxLoad,
            GR75MediumTransport.fuelLevel,
            GR75MediumTransport.fuelEfficieny,
            GR75MediumTransport.currentLoad,
            GR75MediumTransport.compatiblePlanet
        )
    }


    public canCarry(cargo: Cargo): boolean {
        const gr75Maxcargo = this.maxCargo

        if (cargo.type === 'DROID_PARTS') {
            if (cargo.weight <= gr75Maxcargo) {
                return true
            }
        }

        return false
    }


    public calculateFuelConsumption(planetDistance: number): number {
        return planetDistance * this.speed * (1 + this.currentCargo / this.maxCargo)
    }
}

export { StarDestroyer, GR75MediumTransport, TieExplorer }