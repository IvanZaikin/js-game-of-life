import { Generation } from './generation';
import { Cell, CELL, Population } from './types';

describe('Generation', () => {
    describe('next', () => {
        test('should create next generation of a cell with neighbors', () => {
            const cell: Cell = CELL.ALIVE;
            const neighbor: Cell = CELL.DEAD;
            const population: Population = [[cell, neighbor]];
            const cellMaker = jest.fn();
            const generation = new Generation(cellMaker);

            generation.next(population);

            expect(cellMaker).toHaveBeenCalledWith(cell, neighbor);
        });

        test('should create a new population', () => {
            const cell: Cell = CELL.ALIVE;
            const neighbor: Cell = CELL.DEAD;
            const population = [[cell, neighbor]];
            const cellMaker = jest.fn();
            const generation = new Generation(cellMaker);
            const newPopulation = generation.next(population);
            expect(newPopulation).not.toEqual(population);
        });
    });
});
