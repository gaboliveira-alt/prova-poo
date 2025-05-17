import { ShipsName, starShipsNames } from "src/utils/types"
import { Planet } from "./planet"
import { StarShip } from "./starship"
import { randomChoice } from "src/utils/randomChoice"

export class GeneratorMission {

    public readonly availableShips: string[]
    public readonly availablePlanets: string[]

    constructor (availableShips: string[], availablePlanets: string[]) {
        this.availableShips = availableShips
        this.availablePlanets = availablePlanets
    }


    public generateStarShips(): StarShip {
        const shipNamesType: ShipsName = starShipsNames
        const randomType = shipNamesType
    }


    public generatePlanets(): Planet {

    }
}