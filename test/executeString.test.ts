describe('executeString', () => {
    test('should execute string', () => {
        const rover = new Rover(0, 0, Orientation.N);
        rover.executeString("FFRFF");
        expect(rover.showCoords()).toBe("(2, 2, E)");
    })
)