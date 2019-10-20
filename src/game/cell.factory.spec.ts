import { cellMaker } from './cell.factory';
import { CELL } from './types';

const UNDERPOPULATION = 1;
const NORMAL_POPULATION = 2;
const OVERPOPULATION = 4;
const REPOPULATION = 3;

describe('StateManagement', () => {
    describe('cellMaker', () => {
        test('alive cell should die as if underpopulation', () => {
            expect(cellMaker(CELL.ALIVE, UNDERPOPULATION)).toEqual(CELL.DEAD);
        });

        test('alive cell shoul live as if normal population', () => {
            expect(cellMaker(CELL.ALIVE, NORMAL_POPULATION)).toEqual(CELL.ALIVE);
        });

        test('alive cell should die as if overpopulation', () => {
            expect(cellMaker(CELL.ALIVE, OVERPOPULATION)).toEqual(CELL.DEAD);
        });

        test('dead cell should live as if repopulation', () => {
            expect(cellMaker(CELL.DEAD, REPOPULATION)).toEqual(CELL.ALIVE);
        });
    });
});


