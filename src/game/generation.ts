import { CELL } from "./types";

interface CellCalculator {
    (cell: CELL, neighbors: number): CELL;
}

export class Generation {
    constructor(
        public cells: CELL[][]
    ) {
    }

    next(calculateCell: CellCalculator): Generation {
        const newCells: CELL[][] = Array.from({ length: this.cells.length }, () => []);
        this.cells.forEach((cellsRow: CELL[], rowIndex: number) => {
            cellsRow.forEach((cell: CELL, columnIndex: number) => {
                const neighbors = this.getNeighbors(rowIndex, columnIndex);
                const newCell = calculateCell(cell, neighbors);
                newCells[rowIndex].push(newCell);
            });
        });
        return new Generation(newCells);
    }

    private getNeighbors(rowIndex: number, columnIndex: number): number {
        const shifts = [
            [-1, -1], [-1, 0], [-1, 1],
            [ 0, -1],          [ 0, 1],
            [ 1, -1], [ 1, 0], [ 1, 1],
        ];
        return shifts.reduce((acc, [rowShift, columnShift]) =>
            acc + this.getCell(rowIndex + rowShift, columnIndex + columnShift), 0);
    }

    private getCell(rowIndex: number, columnIndex: number): CELL {
        const rowCells = this.cells[rowIndex] || [];
        return rowCells[columnIndex] || CELL.DEAD;
    }
}