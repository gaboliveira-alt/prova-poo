import { CreateCargo } from "./services/createCargo";
import { CreatePlanet } from "./services/createPlanet";
import { CreateStarShip } from "./services/createStarShip";
import { MissionControll } from "./services/startTrip";

const apollo11 = CreateStarShip.createStarDestroyer('Apollo 11');
const Prometheus = CreateStarShip.createGR75MediumTransport('Prometheus');
const mileniumFalcon = CreateStarShip.createTieExplorer('Milenium Falcon');

const Zyan = CreatePlanet.createRockyPlanet('Zyan');
const Felicia = CreatePlanet.createCorrosivePlanet('Felicia');
const Cryptonito = CreatePlanet.createAquaticPlanet('Cryptonito');
const PlanetaBills = CreatePlanet.createRockyPlanet('PlanetaBills');
const Sadala = CreatePlanet.createRockyPlanet('Sadala');

const cargo = CreateCargo.createBiotech();

Sadala.showPlanet();
Prometheus.showShip();

const first_mission = new MissionControll('Send Biotech', Prometheus, cargo);

first_mission.missionStatus();