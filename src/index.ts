import { cellMaker } from './game/cell.factory';
import { Generation } from './game/generation';
import { cliReder as render } from './game/renderers';
import { Population } from './game/types';

const Scenario = require('../data.json');

const [ scenario, speed = 300 ] = process.argv.slice(2);

let population: Population = Scenario[scenario];

if (!population) process.exit(1);

const generation = new Generation(cellMaker);

render(population);

setInterval(() => {
    population = generation.next(population);
    render(population);
}, 300);
