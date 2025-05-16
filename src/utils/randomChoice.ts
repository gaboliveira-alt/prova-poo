export function randomChoice(array: any[]): any {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

export function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}