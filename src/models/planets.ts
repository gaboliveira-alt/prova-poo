import { Planet } from "./planet";
import { PlanetType } from "../utils/types";
import { Restrictions } from "../utils/types";

class CorrosivePlanet extends Planet {
    constructor(name: string, distance: number, restrictions: Restrictions[]) {
        super(name, 'CORROSIVE', distance, restrictions)
    };
};

class RockyPlanet extends Planet {
    constructor(name: string, distance: number, restrictions: Restrictions[]) {
        super(name, 'ROCKY', distance, restrictions)
    };
};

class AquaticPlanet extends Planet {
    constructor(name: string, distance: number, restrictions: Restrictions[]) {
        super(name, 'AQUATIC', distance, restrictions)
    };
};

export{ CorrosivePlanet, RockyPlanet, AquaticPlanet }