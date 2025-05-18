import { Cargo } from "./cargo";
import { Planet } from "./planet";
import { StarShip } from "./starship";
import { GeneratorMission } from "./generatormission";

export class StarTrip {

    public readonly starShip: StarShip
    public readonly cargoShip: Cargo
    public readonly destinyPlanet: Planet
    public readonly missionStatus: string[]
    private fuelNeeded: number = 0

    constructor() {
        this.starShip = GeneratorMission.generateRandomShips()
        this.cargoShip = GeneratorMission.generateRandomCargos()
        this.destinyPlanet = GeneratorMission.generateRandomPlanets()
        this.missionStatus = []
    }


    public startMission(): void {
        if (!this.starShip.loadCargo(this.cargoShip)) {
            this.missionStatus.push('FAILED')
            return
        }


        if (!this.starShip.compatiblePlanets.includes(this.destinyPlanet.type)) {
            this.missionStatus.push('FAILED')
            return
        }

        if (!this.destinyPlanet.acceptsCargo(this.cargoShip)) {
            this.missionStatus.push('FAILED')
            return
        }

        this.fuelNeeded = this.starShip.calculateFuelConsumption(this.destinyPlanet.distancefromEarth)
        if (this.starShip.fuelLevel < this.fuelNeeded) {
            this.missionStatus.push('FAILED')
            return
        }

        this.missionStatus.push('SUCESS')
    }


    public executeMission(): void {
        if (this.fuelNeeded < this.starShip.fuelLevel) {
            this.starShip.travelToDestiny(this.fuelNeeded)
        }

        this.starShip.unloadCargo()
        this.missionStatus.push('DONE')
    }


    public generateReport(): string {
        const lastmissionStatus: string = this.missionStatus[this.missionStatus.length - 1]
        
        const headMessage: string = `\n RELATORIO DA MISSÃO \n`
        let bodyMessage: string = headMessage + `- Nave: ${this.starShip.name}\n` + 
                                    `- Carga: ${this.cargoShip.type}\n` + 
                                    `- Planeta: ${this.destinyPlanet.name} ${this.destinyPlanet.type}\n` + 
                                    `- Combustivel usado: ${this.fuelNeeded.toFixed(1)}`
        
        
        switch(lastmissionStatus) {
            case 'DONE':
                bodyMessage += `\n MISSÃO BEM SUCEDIDA \n` + 
                `Carga entregue! Combustivel restante: ${this.starShip.fuelLevel.toFixed(1)}`
                break
            case 'SUCESS':
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