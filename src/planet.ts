export abstract class Planet {

    public readonly name: string
    public readonly type: string
    protected distancefromEarth: number
    protected restrictions: string[]


    constructor(name: string, type: string, distancefromEarth: number) {
        this.name = name
        this.type = type
        this.distancefromEarth = distancefromEarth
        this.restrictions = []
    }

    public acceptsCargp(): void {}
}