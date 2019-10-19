import { cliReder } from './renderers';

describe('Renderers', () => {
    describe('cliRender', () => {
        test('should render an alive cell as an asterix', () => {
            const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
            cliReder([[1]]);
            expect(spy).toHaveBeenCalledWith('|*|');
            spy.mockRestore();
        });

        test('should render a dead cell as empty char', () => {
            const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
            cliReder([[0]]);
            expect(spy).toHaveBeenCalledWith('| |');
            spy.mockRestore();
        });
    });
});
