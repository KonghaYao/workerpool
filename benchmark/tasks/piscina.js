const path = require('path');
const Piscina = require('piscina');
const benchmarkTest = require('../compute.main');


module.exports = (val, cpus) => {
  const piscina = new Piscina({
    filename: './tasks/piscina.worker.js',
    maxThreads: cpus
  });
  const arr  = [...Buffer.from(val)]
  return benchmarkTest(arr, (arr) => piscina.run(JSON.stringify(arr)),cpus).then((res) => {
    piscina.destroy()
  })
}
