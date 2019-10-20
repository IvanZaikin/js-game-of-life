import { CELL, Cell } from './types';

export function nextState(cell: Cell, neighbors: number): Cell {
    if (cell === CELL.ALIVE) {
        return +(1 < neighbors && neighbors < 4);
    }
    return +(neighbors === 3);
}
