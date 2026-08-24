import { Orientation, Rover } from "..";

describe("Gira izquierda, gira derecha test", () => {
  test("Girando", () => {
    const rovertest = new Rover(0, 0, Orientation.N);

    expect(rovertest.turnRight()).toBe(Orientation.E);

    expect(rovertest.turnLeft()).toBe(Orientation.N);
  });
})