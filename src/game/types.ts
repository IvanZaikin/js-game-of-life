export enum CELL {
    ALIVE = 1,
    DEAD = 0
}

export type Cell = CELL.ALIVE | CELL.DEAD;

export type Population = Cell[][];

export interface CellFactory {
    (cell: Cell, neighborsSum: number): Cell;
}
