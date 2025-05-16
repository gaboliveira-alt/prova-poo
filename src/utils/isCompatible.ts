import { Restrictions, Requirements } from "./utils";

export function isCompatible(restriction: Restrictions, requirements: Requirements[]): boolean {
    if (restriction === Restrictions.ACID_RESISTANT && requirements.includes(Requirements.ANTI_CORROSIVE)) {
        return true;
    }
    if (restriction === Restrictions.HUMIDITY_SENSITIV && requirements.includes(Requirements.PRESSURE_SEALED)) {
        return true;
    }
    if (restriction === Restrictions.NO_LIQUIDS && requirements.includes(Requirements.SHOCK_PROOF)) {
        return true;
    }

    return false;
}
