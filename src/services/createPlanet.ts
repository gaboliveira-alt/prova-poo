import { CorrosivePlanet, RockyPlanet, AquaticPlanet } from "../models/planets";
import { Restrictions } from "../utils/utils";

export class CreatePlanet {
    static createCorrosivePlanet(name: string, distance: number, restrictions: Restrictions[]) {
        const corrosivePlanet = new CorrosivePlanet(name, distance, restrictions);
        return corrosivePlanet;
    };

    static createRockyPlanet(name: string, distance: number, restrictions: Restrictions[]) {
        const rockyPlanet = new RockyPlanet(name, distance, restrictions);
        return rockyPlanet;
    };

    static createAquaticPlanet(name: string, distance: number, restrictions: Restrictions[]) {
        const aquaticPlanet = new AquaticPlanet(name, distance, restrictions);
        return aquaticPlanet;
    };
}