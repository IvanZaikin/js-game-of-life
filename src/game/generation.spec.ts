import { Generation } from './generation';

describe('Generation', () => {
    describe('next', () => {
        test('should calculate next state for a cell with neighbors', () => {
            const cell = 1;
            const neighbor = 0;
            const cells = [[cell, neighbor]];
            const stateCalculator = jest.fn();
            const generation = new Generation(cells);
            generation.next(stateCalculator);
            expect(stateCalculator).toHaveBeenCalledWith(cell, neighbor);
        });

        test('should create new generation', () => {
            const cell = 1;
            const neighbor = 0;
            const cells = [[cell, neighbor]];
            const stateCalculator = jest.fn();
            const generation = new Generation(cells);
            const newGeneration = generation.next(stateCalculator);
            expect(newGeneration).not.toEqual(generation);
        });
    });
});
