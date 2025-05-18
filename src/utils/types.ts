
export type CargoType = 'INDUSTRIAL_EQUIPMENT' | 'BIOTECH' | 'DROID_PARTS' 

export type PlanetType = keyof PlanetsName

export type Requirements = 'SHOCK_PROOF' | 'PRESSURE_SEALED' | 'ANTI_CORROSIVE'

export type Restrictions =  'ACID_RESISTANT' | 'HUMIDITY_SENSITIV' | 'NO_LIQUIDS'


export type ShipsName = {
    StarDestroyer: string[],
    TieExplorer: string[],
    GR75: string[]
}


export type ShipTypes = keyof ShipsName


export const starShipsNames: ShipsName = {
    StarDestroyer: ['Executor', 'Devastator', 'Malgus'],
    TieExplorer: ['Phantom','Shadow Probe', 'Deep Scanner'],
    GR75: ['Dawn Runner', 'Light Carrier', 'Rebel Hauler']
}


export type PlanetsName = {
    ROCKY: string[],
    CORROSIVE: string[],
    AQUATIC: string[]
}


export const PlanetsName: PlanetsName = {
    ROCKY: ['Korriban', 'Jaku', 'Geonosis'],
    CORROSIVE: ['Dagobah', 'Vjun', 'Felucia'],
    AQUATIC: ['Mon Cala', 'Kamino', 'Naboo']
}