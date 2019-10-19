import { nextState } from './state-management';
import { CELL } from './types';

describe('StateManagement', () => {
    describe('nextState', () => {
        test('alive cell should die as if underpopulation', () => {
            const underpopulation = 1;
            expect(nextState(CELL.ALIVE, underpopulation)).toEqual(CELL.DEAD);
        });

        test('alive cell shoul live as if normal population', () => {
            const population = 2;
            expect(nextState(CELL.ALIVE, population)).toEqual(CELL.ALIVE);
        });

        test('alive cell should die as if overpopulation', () => {
            const overpopulation = 4;
            expect(nextState(CELL.ALIVE, overpopulation)).toEqual(CELL.DEAD);
        });

        test('dead cell should live as if repopulation', () => {
            const repopulation = 3;
            expect(nextState(CELL.DEAD, repopulation)).toEqual(CELL.ALIVE);
        });
    });
});


