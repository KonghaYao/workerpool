import { pool as _pool } from 'workerpool'
import createBenchmarkTest from '../createBenchmarkTest.mjs'
export default (val, cpus, times) => {
    const pool = _pool('./tasks/workerpool.worker.mjs', { maxWorkers: cpus })
    return createBenchmarkTest(val, (chunk) => pool.exec('compute', [chunk], { transfer: [chunk.buffer] })).finally(() => {
        pool.terminate()
    })
}