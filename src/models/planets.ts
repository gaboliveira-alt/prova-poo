import { Planet } from "./planet";
import { PlanetType } from "../utils/utils";
import { Restrictions } from "../utils/utils";

class CorrosivePlanet extends Planet {
    constructor(name: string, distance: number, restrictions: Restrictions[]) {
        super(name, PlanetType.CORROSIVE, distance, restrictions)
    };
};

class RockyPlanet extends Planet {
    constructor(name: string, distance: number, restrictions: Restrictions[]) {
        super(name, PlanetType.ROCKY, distance, restrictions)
    };
};

class AquaticPlanet extends Planet {
    constructor(name: string, distance: number, restrictions: Restrictions[]) {
        super(name, PlanetType.AQUATIC, distance, restrictions)
    };
};

export{ CorrosivePlanet, RockyPlanet, AquaticPlanet }