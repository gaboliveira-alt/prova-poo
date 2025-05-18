import { PlanetsName, starShipsNames } from "../utils/types"
import { Planet } from "./planet"
import { StarShip } from "./starship"
import { randomChoice,randomInt } from "../utils/randomChoice"
import { CreateStarShip } from "../services/createStarShip"
import { CreatePlanet } from "../services/createPlanet"
import { Cargo } from "./cargo"
import { CargoType,Requirements } from "../utils/types"
import { StarTrip } from "./startrip"


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
                typeCargo = 'INDUSTRIAL_EQUIPAMENT'
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


    static generateCompatibleMissions(): {starShip: StarShip, cargo: Cargo, planet: Planet} {
       const allShips: StarShip[] = []
       for (let i = 0; i < 5; i++) {
        allShips.push(this.generateRandomShips())
       }


       const allCargos: Cargo[] = []
       for (let i = 0; i < 5; i++) {
        allCargos.push(this.generateRandomCargos())
       }


       const allPlanets: Planet[] = []
       for (let i = 0; i < 5; i++) {
        allPlanets.push(this.generateRandomPlanets())
       }


       const communCargoTypes: string[] = ['BIOTECH', 'DROID_PARTS', 'INDUSTRIAL_EQUIPAMENT']
       const filteredCargos: Cargo[] = []
       for (const cargo of allCargos) {
        if (communCargoTypes.includes(cargo.type)) {
            filteredCargos.push(cargo)
        }
       }


       const chosenCargo = randomChoice(filteredCargos) as Cargo


       const filteredShips: StarShip[] = []
       for (const ship of allShips) {
        if (ship.canCarry(chosenCargo)) {
            filteredShips.push(ship)
        }
       }


       if (Math.random() < 0.20) {
        filteredShips.push(randomChoice(allShips))
       }


       const chosenShip = randomChoice(filteredShips) as StarShip


       const filteredPlanets: Planet[] = []
       for (const planet of allPlanets) {
        if (planet.acceptsCargo(chosenCargo) && chosenShip.compatiblePlanets.includes(planet.type)) {
            filteredPlanets.push(planet)
        }
       }


       if (Math.random() < 0.20) {
            filteredPlanets.push(randomChoice(allPlanets))
       }


       const chosenPlanet = randomChoice(filteredPlanets) as Planet


       return {starShip: chosenShip, cargo: chosenCargo, planet: chosenPlanet}
    }
}
