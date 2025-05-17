import { CargoType, Requirements } from "../utils/utils";
import { Cargo } from "../models/cargo";
import { randomInt } from "../utils/randomChoice";

export class CreateCargo {
    static createBiotech() {
        const cargo = new Cargo(CargoType.BIOTECH, randomInt(10, 100), [Requirements.ANTI_CORROSIVE]);
        return cargo;
    };

    static createIndustrialEquipment() {
        const cargo = new Cargo(CargoType.INDUSTRIAL_EQUIPMENT, randomInt(10, 100), [Requirements.PRESSURE_SEALED]);
        return cargo;
    };

    static createDroidParts() {
        const cargo = new Cargo(CargoType.DROID_PARTS, randomInt(10, 100), [Requirements.SHOCK_PROOF]);
        return cargo;
    };
}