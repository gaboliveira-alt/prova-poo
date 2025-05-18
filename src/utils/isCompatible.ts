import { Restrictions, Requirements } from "./types";


function getRequirementsforRestrictions(restriction: Restrictions): Requirements {
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


export function checkCargoCompatible(planetRestrictions: Restrictions, Cargorequirements: Requirements): boolean {
        if (Cargorequirements == getRequirementsforRestrictions(planetRestrictions)) {
            return true
        }
    
     return false
}