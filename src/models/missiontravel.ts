import { Cargo } from "./cargo";
import { Planet } from "./planet";
import { StarShip } from "./starship";

export class MissionTravel {

    public readonly starShip: StarShip
    public readonly cargoShip: Cargo
    public readonly destinyPlanet: Planet
    public readonly missionStatus: string[]
    private fuelNeeded: number = 0

    constructor(starship: StarShip, cargpShip: Cargo, destinyPlanet: Planet) {
        this.starShip = starship
        this.cargoShip = cargpShip
        this.destinyPlanet = destinyPlanet
        this.missionStatus = ['PENDING']
    }


    public startMission(): void {
        if (true) {
        this.starShip.canCarry(this.cargoShip)
        this.starShip.compatiblePlanets.includes(this.destinyPlanet.type)
        this.destinyPlanet.acceptsCargo(this.cargoShip)
        
        this.fuelNeeded = this.starShip.calculateFuelConsumption(this.destinyPlanet.distancefromEarth)
        if (this.starShip.fuelLevel < this.fuelNeeded) {
            this.missionStatus.push('FAILED')
            return
        }

        this.missionStatus.push('SUCESS')
    }
    }


    public executeMission(): void {
        if (!this.fuelNeeded) {
            this.starShip.travelToDestiny(this.fuelNeeded)
        }

        this.starShip.unloadCargo()
        this.missionStatus.push('DONE')
    }


    public generateReport(): string {
        const lastmissionStatus = this.missionStatus[this.missionStatus.length - 1]
        return ''
    }
}