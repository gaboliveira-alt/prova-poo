import { Cargo } from "../models/cargo";
import { MissionTravel } from "../models/missiontravel";
import { Planet } from "../models/planet";
import { planets } from "../models/planets";
import { StarShip } from "../models/starship";
import { randomChoice } from "../utils/randomChoice";

export class MissionControll {
    missionTravel: MissionTravel;
    targetPlanet: Planet;
    cargo: Cargo;
    status: string;
    relatorie: string[] = [];

    constructor(missionName: string, starShip: StarShip, cargo: Cargo) {
        this.missionTravel = new MissionTravel(missionName, starShip);
        this.targetPlanet = randomChoice(planets);
        this.cargo = cargo;

        const canCarry: boolean = this.missionTravel.starShip.loadCargo(cargo);
        const accepts: boolean = this.targetPlanet.acceptsCargo(cargo);
        const fuel: boolean = this.missionTravel.starShip.travelToDestiny(this.targetPlanet.distancefromEarth);

        if (canCarry && accepts && fuel) {
            this.status = 'sucess'
        } else {
            this.status = 'fail'

            if (!canCarry) {
                this.relatorie.push('Cargo is too heavy for transport');
            } else {
                this.relatorie.push('StarShip can transport cargo');
            }

            if (!accepts) {
                this.relatorie.push(`Cargo cannot be transported to ${this.targetPlanet.name}`);
            } else {
                this.relatorie.push(`Cargo can be transported to ${this.targetPlanet.name}`);
            }

            if (!fuel) {
                this.relatorie.push(`The StarShip does not have enough fuel for the journey`)
            } else {
                this.relatorie.push('Fuel enough');
            }
        }
    }

    public missionStatus() {
        console.log('--------------------------------------------------');
        console.log('///Mission Controll///');
        console.log(`Relatories ${this.missionTravel.missionName}:`);
        console.log(`Travel to ${this.targetPlanet.name}`);
        console.log(`Carrying to planet: ${this.cargo.type}`);
        console.log(`Status: ${this.status}`)
        console.log(this.relatorie);
    }
}