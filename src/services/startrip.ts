import { Cargo } from "../models/cargo";
import { Planet } from "../models/planet";
import { StarShip } from "../models/starship";
import { GeneratorMission } from "../models/generatormission";

export class StarTrip {

    public readonly starShip: StarShip
    public readonly cargoShip: Cargo
    public readonly destinyPlanet: Planet
    private missionStatus: string
    private fuelNeeded: number = 0

    constructor() {
        const {starShip, cargo, planet} = GeneratorMission.generateCompatibleMissions()
        this.starShip = starShip
        this.cargoShip = cargo
        this.destinyPlanet = planet
        this.missionStatus = 'NONE'
    }


    private hasFuelToTrip(planetDistance: number): boolean {
        return this.starShip.calculateFuelConsumption(planetDistance) <= this.starShip.fuelLevel
    }
    
    
    public startMission(): void {
        this.starShip.resetCargo()
        
        if (!this.starShip.loadCargo(this.cargoShip)) {
            this.missionStatus = 'FAILED'
            return
        }


        if (!this.starShip.compatiblePlanets.includes(this.destinyPlanet.type)) {
            this.missionStatus = 'FAILED'
            return
        }

        if (!this.destinyPlanet.acceptsCargo(this.cargoShip)) {
            this.missionStatus = 'FAILED'
            return
        }

        this.fuelNeeded = this.starShip.calculateFuelConsumption(this.destinyPlanet.distancefromEarth)
        
        if (!this.hasFuelToTrip(this.destinyPlanet.distancefromEarth)) {
            this.missionStatus = 'FAILED'
            return
        }

        this.missionStatus = 'SUCCESS'
    }


    public executeMission(): void {
        if (this.missionStatus !== 'SUCCESS') {
            return
        }

        const conclusionTravel = this.starShip.travelToDestiny(this.destinyPlanet.distancefromEarth)
        
        
        if (conclusionTravel) {
            this.starShip.unloadCargo()
            this.missionStatus = 'DONE'
        }
        else {
            this.missionStatus = 'FAILED'
        }
    }


    public generateReport(): string {
        const lastmissionStatus: string = this.missionStatus
        
        const headMessage: string = `\n RELATORIO DA MISSÃO \n`
        let bodyMessage: string = headMessage + `- Nave: ${this.starShip.name}\n` + 
                                    `- Carga: ${this.cargoShip.type}\n Requirementos: ${this.cargoShip.requirements}\n` + 
                                    `- Planeta: ${this.destinyPlanet.name}\n Tipo: ${this.destinyPlanet.type}\n` + 
                                    `- Combustivel usado: ${this.fuelNeeded.toFixed(1)}\n`
        
        
        switch(lastmissionStatus) {
            case 'DONE':
                bodyMessage += `\n MISSÃO BEM SUCEDIDA \n` + 
                `Carga entregue! Combustivel restante: ${this.starShip.fuelLevel.toFixed(1)}`
                break
            case 'SUCCESS':
                bodyMessage += `MISSÃO PRONTA, MAS NÃO EXECUTADA`
                break
            case 'FAILED':
                bodyMessage += `\n MISSÃO COMPROMETIDA \n` + `Status: ${lastmissionStatus}`
                break
            default:
                return `Status da Missão desconhecido\n`
        }

        return bodyMessage
    }
}