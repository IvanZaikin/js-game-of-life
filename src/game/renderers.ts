import { CELL, Cell, Population } from "./types";

export function cliReder(population: Population): void {
    population.forEach((cells: Cell[]) => {
        console.log(`|${cells.map(cell => (cell === CELL.ALIVE && '*') || ' ').join(' ')}|`);
    });
}
