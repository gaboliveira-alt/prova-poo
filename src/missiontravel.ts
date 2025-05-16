import { StarShip } from "./starship"

export class MissionTravel {
    
    public readonly missionName: string
    public readonly starShip: StarShip


    constructor(missionName: string, starShip: StarShip) {
        this.missionName = missionName
        this.starShip = starShip
    }
}