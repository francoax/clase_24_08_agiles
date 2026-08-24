import { Orientation, Rover } from '../index';

describe("move forward", () => {
    test("should move forward", () => {
        const rover = new Rover(0, 0, Orientation.N);
        rover.moveForward();
        expect(rover.showCoords()).toBe("(0, 1, N)");
    });
})