const workerpool = require('workerpool')
const benchmarkTest = require('../compute.main')
module.exports = (val, cpus) => {
    const pool = workerpool.pool('./tasks/workerpool.worker.js', { maxWorkers: cpus })
    return benchmarkTest([...Buffer.from(val)], (arr) => {
        return pool.exec('compute', [JSON.stringify(arr)])
    }, cpus).then(function (res) {
        pool.terminate()
    });
}