import { Restrictions, Requirements } from "./utils";

export type RestrictionsType = 'HUMIDITY_SENSITIV' | 'NO_LIQUIDS' | 'ACID_RESISTANT'

export function isCompatible(restriction: Restrictions, requirements: Requirements[]): boolean {
    if (restriction === Restrictions.ACID_RESISTANT && requirements.includes(Requirements.ANTI_CORROSIVE)) {
        return true;
    } else if (restriction === Restrictions.HUMIDITY_SENSITIV && requirements.includes(Requirements.PRESSURE_SEALED)) {
        return true;
    } else if (restriction === Restrictions.NO_LIQUIDS && requirements.includes(Requirements.SHOCK_PROOF)) {
        return true;
    }

    return false;
}
