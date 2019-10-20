import { CELL, Cell } from './types';

const UNDERPOPULATION = 1;
const OVERPOPULATION = 4;
const REPOPULATION = 3;

export function cellMaker(cell: Cell, neighborsSum: number): Cell {
    if (neighborsSum <= UNDERPOPULATION || OVERPOPULATION <= neighborsSum) { return CELL.DEAD; }
    if (neighborsSum == REPOPULATION) { return CELL.ALIVE; }

    return cell;
}
