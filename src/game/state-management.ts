import { CELL } from './types';

export function nextState(cell: CELL, neighbors: number): CELL {
    if (cell === CELL.ALIVE) {
        return +(1 < neighbors && neighbors < 4);
    }
    return +(neighbors === 3);
}
