import { PlanetsName, PlanetType, ShipTypes, starShipsNames } from "src/utils/types"
import { Planet } from "./planet"
import { StarShip } from "./starship"
import { randomChoice,randomInt } from "../utils/randomChoice"
import { CreateStarShip } from "../services/createStarShip"
import { CreatePlanet } from "../services/createPlanet"
import { Cargo } from "./cargo"
import { CargoType,Requirements } from "../utils/types"


export class GeneratorMission {

    private static readonly shipTypes: ShipTypes[] = Object.keys(starShipsNames) as ShipTypes[]

    private static readonly configPlanet: PlanetType[] = Object.keys(PlanetsName) as PlanetType[]


    public generateRandomShips(): StarShip {
        const randomType = randomChoice(GeneratorMission.shipTypes) as ShipTypes
        const shipNames = starShipsNames[randomType]
        const randomName = randomChoice(shipNames)

        const factoryTypeShips = `create${randomType}` as keyof typeof CreateStarShip
        const factoryCreateShips = CreateStarShip[factoryTypeShips] as (name: string) => StarShip
        return factoryCreateShips(randomName)
    }


    public generateRandomPlanets(): Planet {
        const randomOptions = randomChoice(GeneratorMission.configPlanet) as PlanetType
        const planetNames = PlanetsName[randomOptions]
        const randomName = randomChoice(planetNames)

        const factoryTypePlanets = `create${randomOptions}Planet` as keyof typeof CreatePlanet
        const factoryCreatePlanets = CreatePlanet[factoryTypePlanets] as (name: string) => Planet

        return factoryCreatePlanets(randomName)
    }


    public generateRandomCargos(): Cargo {

    }
}