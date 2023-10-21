import { pool as _pool } from 'workerpool'
export default (val, cpus, times) => {
    const pool = _pool('./tasks/workerpool.worker.mjs', { maxWorkers: cpus })
    return Promise.all([...Array(cpus * times).keys()].map((arr) => pool.exec('compute', [val]))).then(function (res) {
        return pool.terminate()
    })
}