import { RestrictionsType } from "./isCompatible";

export function Convert(id: number) {
    let result: RestrictionsType;
    switch (id) {
        case 0:
            result = 'ACID_RESISTANT';
            break;
        case 1:
            result = 'HUMIDITY_SENSITIV';
            break;
        case 2:
            result = 'NO_LIQUIDS';
            break;
    }
    return result!
}