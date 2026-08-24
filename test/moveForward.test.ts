import { Orientation, Rover } from '../index';

describe("move forward", () => {
    test("should move forward", () => {
        const rover = new Rover(0, 0, Orientation.N);
        rover.moveForward();
        expect(rover.showCoords()).toBe("(0, 1, N)");
    });

    test("should move forward", () => {
        const rover = new Rover(0, 0, Orientation.S);
        rover.moveForward();
        expect(rover.showCoords()).toBe("(0, -1, S)");
    });

    test("should move forward", () => {
        const rover = new Rover(0, 0, Orientation.E);
        rover.moveForward();
        expect(rover.showCoords()).toBe("(1, 0, E)");
    });

    test("should move forward", () => {
        const rover = new Rover(0, 0, Orientation.O);
        rover.moveForward();
        expect(rover.showCoords()).toBe("(-1, 0, O)");
    });
})