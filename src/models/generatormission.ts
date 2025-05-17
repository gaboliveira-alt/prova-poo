import { ShipTypes, starShipsNames } from "src/utils/types"
import { Planet } from "./planet"
import { StarShip } from "./starship"
import { randomChoice } from "src/utils/randomChoice"
import { CreateStarShip } from "src/services/createStarShip"

export class GeneratorMission {

    private static readonly shipTypes: ShipTypes[] = Object.keys(starShipsNames) as ShipTypes[]


    public generateRandomShips(): StarShip {
        const randomType = randomChoice(GeneratorMission.shipTypes) as ShipTypes
        const shipNames = starShipsNames[randomType]
        const randomName = randomChoice(shipNames)

        const factoryTypeShips = `create${randomType}` as keyof typeof CreateStarShip
        const factoryCreateShips = CreateStarShip[factoryTypeShips] as (name: string) => StarShip
        return factoryCreateShips(randomName)
    }


    public generateRandomPlanets(): Planet {

    }
}