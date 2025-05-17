import { Restrictions, Requirements } from "./types";


export function getRequirementsforRestrictions(restriction: Restrictions): Requirements {
    switch (restriction) {
        case 'ACID_RESISTANT':
            return 'ANTI_CORROSIVE'
        case 'HUMIDITY_SENSITIV':
            return 'PRESSURE_SEALED'
        case 'NO_LIQUIDS':
            return 'SHOCK_PROOF'
        default:
            throw new Error('Requirementos de Carga não conhecidos');
    }
}


export function checkCargoCompatible(planetRestrictions: Restrictions[], Cargorequirements: Requirements[]): boolean {
    for (const restriction of planetRestrictions) {
        const getRequirements = getRequirementsforRestrictions(restriction)

        if (!Cargorequirements.includes(getRequirements)) {
            return false
        }
    }

    return true
}