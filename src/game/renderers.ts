import { CELL } from "./types";

export function cliReder(cells: CELL[][]): void {
    // cells.forEach((rowCells: CELL[]) => {
    //     console.log(`|${rowCells.join(' ')}|`);
    // });
    cells.forEach((rowCells: CELL[]) => {
        console.log(`|${rowCells.map(cell => cell === CELL.ALIVE ? '*' : ' ').join(' ')}|`);
    });
}
