import { nextState } from './game/state-management';
import { Generation } from './game/generation';
import { cliReder } from './game/renderers';

const Scenario = require('../data.json');

const [ scenario ] = process.argv.slice(2);

let cells = (<any>Scenario)[scenario];

if (!cells) process.exit(1);

let generation = new Generation(cells);

const render = () => cliReder(generation.cells);

render();

setInterval(() => {
    generation = generation.next(nextState);
    render();
}, 500);
