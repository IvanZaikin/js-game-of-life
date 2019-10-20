import { nextState } from './game/state-management';
import { Generation } from './game/generation';
import { cliReder } from './game/renderers';
import { Population } from './game/types';

const Scenario = require('../data.json');

const [ scenario ] = process.argv.slice(2);

let population: Population = Scenario[scenario];

if (!population) process.exit(1);

const generation = new Generation(nextState);

const render = () => cliReder(population);

render();

setInterval(() => {
    population = generation.next(population);
    render();
}, 300);
