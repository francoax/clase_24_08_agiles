import { Rover } from '../index';

const rover = new Rover(0, 0, 'N');

test("should show coords", () => {
    expect(rover.showCoords()).toBe("(0, 0, N)");
});