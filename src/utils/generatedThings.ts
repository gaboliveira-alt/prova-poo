import { randomChoice } from "./randomChoice";
import { StarShip } from "../models/starship";
import { Planet } from "../models/planet";
import { CreatePlanet } from "../services/createPlanet";
import { CreateStarShip } from "../services/createStarShip";

const types = [1, 2, 3];
export const planets: Planet[] = [];
export const starShips: StarShip[] = [];

export class Generate {
    static generatePlanets(qty: number) {
        for (let i = 0; i < qty; i++) { 
            const typePlanet = randomChoice(types);
            let planet: Planet;
    
            switch (typePlanet) {
                case 1:
                    planet = CreatePlanet.createCorrosivePlanet('Teste', 1, []);
                    break;
                case 2:
                    planet = CreatePlanet.createRockyPlanet('Teste', 1, []);
                    break;
                case 3:
                    planet = CreatePlanet.createAquaticPlanet('Teste', 1, []);
                    break;
                }
                planets.push(planet!);
        }
    };

    static generateStarShips(qty: number) {
        for (let i = 0; i < qty; i++) {
            const typeShip = randomChoice(types);
            let ship: StarShip;

            switch (typeShip) {
                case 1:
                    ship = CreateStarShip.createStarDestroyer('Teste');
                    break;
                case 2:
                    ship = CreateStarShip.createTieExplorer('Teste');
                    break;
                case 3:
                    ship = CreateStarShip.createGR75MediumTransport('Teste');
                    break;
            }
            starShips.push(ship!);
        }
    }
}