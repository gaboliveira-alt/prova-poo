import { Cargo } from "./cargo";
import { Planet } from "./planet";
import { StarShip } from "./starship";
import { GeneratorMission } from "./generatormission";

export class StarTrip {

    public readonly starShip: StarShip
    public readonly cargoShip: Cargo
    public readonly destinyPlanet: Planet
    private missionStatus: string
    private fuelNeeded: number = 0

    constructor() {
        this.starShip = GeneratorMission.generateRandomShips()
        this.cargoShip = GeneratorMission.generateRandomCargos()
        this.destinyPlanet = GeneratorMission.generateRandomPlanets()
        this.missionStatus = 'NONE'
    }


    private hasFuelToTrip(planetDistance: number): boolean {
        return this.starShip.calculateFuelConsumption(planetDistance) <= this.starShip.fuelLevel
    }
    
    
    public startMission(): void {
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

        if (!this.hasFuelToTrip(this.destinyPlanet.distancefromEarth)) {
            this.missionStatus = 'FAILED'
            return
        }

        this.fuelNeeded = this.starShip.calculateFuelConsumption(this.destinyPlanet.distancefromEarth)
        this.missionStatus = 'SUCCESS'
    }


    public executeMission(): void {
        if (this.missionStatus !== 'SUCCESS') {
            console.log("MISSÃO NÃO ESTÁ PRONTA PARA EXECUÇÃO.\n")
            return
        }

        const conclusionTravel = this.starShip.calculateFuelConsumption(this.fuelNeeded)
        
        
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