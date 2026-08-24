import { Orientation, Rover } from '../index';

describe("move backwards", () => {
  test("should move backwards", () => {
    const rover = new Rover(0, 0, Orientation.N);
    rover.moveBackwards();
    expect(rover.showCoords()).toBe("(0, -1, N)");
  });

  test("should move backwards", () => {
    const rover = new Rover(0, 0, Orientation.S);
    rover.moveBackwards();
    expect(rover.showCoords()).toBe("(0, 1, S)");
  });

  test("should move backwards", () => {
    const rover = new Rover(0, 0, Orientation.E);
    rover.moveBackwards();
    expect(rover.showCoords()).toBe("(-1, 0, E)");
  });

  test("should move backwards", () => {
    const rover = new Rover(0, 0, Orientation.O);
    rover.moveBackwards();
    expect(rover.showCoords()).toBe("(1, 0, O)");
  });
})