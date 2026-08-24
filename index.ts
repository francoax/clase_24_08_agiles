export enum Orientation {
    N = "N",
    S = "S",
    E = "E",
    O = "O"
}

export class Rover {
    constructor(
        private x: number = 0,
        private y: number = 0,
        private direction: Orientation = Orientation.N
    ) { }

    showCoords() {
        return `(${this.x}, ${this.y}, ${this.direction})`
    }

    turnRight() {
        console.log(`Rover esta mirando en direccion al ${this.direction}`);
        switch (this.direction) {
            case Orientation.N:
                this.direction = Orientation.E;
                break;
            case Orientation.E:
                this.direction = Orientation.S;
                break;
            case Orientation.O:
                this.direction = Orientation.N;
                break;
            case Orientation.S:
                this.direction = Orientation.O;
                break;
        }

        console.log(`Rover giro hacia la derecha en direccion al ${this.direction}`)

        return this.direction;
    }

    turnLeft() {
        console.log(`Rover esta mirando en direccion al ${this.direction}`);
        switch (this.direction) {
            case Orientation.N:
                this.direction = Orientation.O;
                break;
            case Orientation.E:
                this.direction = Orientation.N;
                break;
            case Orientation.O:
                this.direction = Orientation.S;
                break;
            case Orientation.S:
                this.direction = Orientation.E;
                break;
        }

        console.log(`Rover giro hacia la izquierda en direccion al: ${this.direction}`)

        return this.direction;
    }

    moveForward() {
        console.log(`Rover esta mirando en direccion al ${this.direction}`);

        switch (this.direction) {
            case Orientation.N:
                this.y++;
                break;
            case Orientation.S:
                this.y--;
                break;
            case Orientation.E:
                this.x++;
                break;
            case Orientation.O:
                this.x--;
                break;
        }

        console.log(this.showCoords());

        return this.direction;
    }

    moveBackwards() {
        console.log(`Rover esta mirando en direccion al ${this.direction}`);

        switch (this.direction) {
            case Orientation.N:
                this.y--;
                break;
            case Orientation.S:
                this.y++;
                break;
            case Orientation.E:
                this.x--;
                break;
            case Orientation.O:
                this.x++;
                break;
        }

        console.log(this.showCoords());

        return this.direction;
    }
}
