export class Rover {
    constructor(
        private x: number = 0,
        private y: number = 0,
        private direction: string = "N"
    ) { }

    showCoords() {
        return `(${this.x}, ${this.y}, ${this.direction})`
    }
}
