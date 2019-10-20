import { CELL, Cell, CellFactory, Population } from "./types";

export class Generation {
    constructor(
        public cellMaker: CellFactory,
    ) {
    }

    next(population: Population): Population {
        const newPopulation: Population = Array.from({ length: population.length }, () => []);
        population.forEach((cells: Cell[], rowIndex: number) => {
            cells.forEach((cell: Cell, columnIndex: number) => {
                const neighbors = this.getNeighbors(population, rowIndex, columnIndex);
                const newCell = this.cellMaker(cell, neighbors);
                newPopulation[rowIndex].push(newCell);
            });
        });
        return newPopulation;
    }

    private getNeighbors(population: Population, rowIndex: number, columnIndex: number): number {
        const shifts = [
            [-1, -1], [-1, 0], [-1, 1],
            [ 0, -1],          [ 0, 1],
            [ 1, -1], [ 1, 0], [ 1, 1],
        ];
        return shifts.reduce((acc, [rowShift, columnShift]) =>
            acc + this.getCell(population, rowIndex + rowShift, columnIndex + columnShift), 0);
    }

    private getCell(population: Population, rowIndex: number, columnIndex: number): Cell {
        const cells = population[rowIndex] || [];
        return cells[columnIndex] || CELL.DEAD;
    }
}
