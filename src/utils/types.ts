
export type CargoType = 'INDUSTRIAL_EQUIPMENT' | 'BIOTECH' | 'DROID_PARTS' 

export type PlanetType = 'AQUATIC' | 'ROCKY' | 'CORROSIVE'

export type Requirements = 'SHOCK_PROOF' | 'PRESSURE_SEALED' | 'ANTI_CORROSIVE'

export type Restrictions =  'ACID_RESISTANT' | 'HUMIDITY_SENSITIV' | 'NO_LIQUIDS'

export type ShipsName = {
    StarDestroyer: string[],
    TieExplorer: string[],
    GR75: string[]
}

export const starShipsNames: ShipsName = {
    StarDestroyer: ['Executor', 'Devastator', 'Malgus'],
    TieExplorer: ['Phantom','Shadow Probe', 'Deep Scanner'],
    GR75: ['Dawn Runner', 'Light Carrier', 'Rebel Hauler']
}