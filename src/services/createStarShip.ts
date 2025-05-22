import { StarDestroyer, TieExplorer, GR75MediumTransport } from "../models/starships";


export class CreateStarShip {
    static createStarDestroyer(starShipName: string) {
        const starShip = new StarDestroyer(starShipName);
        return starShip;
    }

    static createTieExplorer(starShipName: string) {
        const starShip = new TieExplorer(starShipName);
        return starShip;
    }

    static createGR75MediumTransport(starShipName: string) {
        const starShip = new GR75MediumTransport(starShipName);
        return starShip;
    }
}
