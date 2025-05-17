import { CreatePlanet } from "./services/createPlanet";
import { CreateStarShip } from "./services/createStarShip";
import { Restrictions } from "./utils/types";

const apollo11 = CreateStarShip.createStarDestroyer('Apollo 11');
const Prometheus = CreateStarShip.createGR75MediumTransport('Prometheus');
const mileniumFalcon = CreateStarShip.createTieExplorer('Milenium Falcon');

const Zyan = CreatePlanet.createRockyPlanet('Zyan');
const Felicia = CreatePlanet.createCorrosivePlanet('Felicia');
const Cryptonito = CreatePlanet.createAquaticPlanet('Cryptonito');
const PlanetaBills = CreatePlanet.createRockyPlanet('PlanetaBills');
const Sadala = CreatePlanet.createRockyPlanet('Sadala');

Sadala.showPlanet();