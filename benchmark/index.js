const Benchmark = require('benchmark');
const workerpool = require('./tasks/workerpool');
const piscina = require('./tasks/piscina');
const suite = new Benchmark.Suite;
const text = "This is a Benchmark"
// workerpool(text, 2)
suite.add('WorkerPool', async function () {
    await workerpool(text, 4)
}).add('Piscina', async function () {
    await piscina(text, 4)
})


suite.on('cycle', function (event) {
    console.log(String(event.target));
})
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    });

suite.run({ 'async': true });