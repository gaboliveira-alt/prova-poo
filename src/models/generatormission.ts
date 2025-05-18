import { PlanetsName, PlanetType, ShipTypes, starShipsNames } from "../utils/types"
import { Planet } from "./planet"
import { StarShip } from "./starship"
import { randomChoice,randomInt } from "../utils/randomChoice"
import { CreateStarShip } from "../services/createStarShip"
import { CreatePlanet } from "../services/createPlanet"
import { Cargo } from "./cargo"
import { CargoType,Requirements } from "../utils/types"


export class GeneratorMission {

    static generateRandomShips(): StarShip {
        const randomNameNumber = randomInt(1, 3)
        let shipNames: string[]
        let ship
        switch (randomNameNumber) {
            case 1:
                shipNames = starShipsNames.StarDestroyer
                ship = CreateStarShip.createStarDestroyer(randomChoice(shipNames))
                break
            case 2:
                shipNames = starShipsNames.TieExplorer
                ship = CreateStarShip.createTieExplorer(randomChoice(shipNames))
                break
            case 3:
                shipNames = starShipsNames.GR75
                ship = CreateStarShip.createGR75MediumTransport(randomChoice(shipNames))
                break
        }
        
        return ship!
    }


    static generateRandomPlanets(): Planet {
        const randomNameNumber = randomInt(1, 3)
        let planetName: string[]
        let planet
        switch (randomNameNumber) {
            case 1:
                planetName = PlanetsName.AQUATIC
                planet = CreatePlanet.createAquaticPlanet(randomChoice(planetName))
                break
            case 2:
                planetName = PlanetsName.CORROSIVE
                planet = CreatePlanet.createCorrosivePlanet(randomChoice(planetName))
                break
            case 3:
                planetName = PlanetsName.ROCKY
                planet = CreatePlanet.createRockyPlanet(randomChoice(planetName))
                break
        }

        return planet!
    }


    static generateRandomCargos(): Cargo {
        const randomTypeNumber = randomInt(1, 3)
        let typeCargo: CargoType
        let cargoRequirement: Requirements
        switch (randomTypeNumber) {
            case 1:
                typeCargo = 'INDUSTRIAL_EQUIPMENT'
                cargoRequirement = 'ANTI_CORROSIVE'
                break
            case 2:
                typeCargo = 'BIOTECH'
                cargoRequirement = 'PRESSURE_SEALED'
                break
            case 3:
                typeCargo = 'DROID_PARTS'
                cargoRequirement = 'SHOCK_PROOF'
                break
        }

        const weight = randomInt(100,1000)

        return new Cargo(typeCargo!, weight, cargoRequirement!) 
    }
}