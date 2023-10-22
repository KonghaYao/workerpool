import Piscina from 'piscina'
import createBenchmarkTest from '../createBenchmarkTest.mjs'
export default (val, cpus, times) => {
  const pool = new Piscina({
    filename: './tasks/piscina.worker.mjs',
    maxThreads: cpus
  })
  return createBenchmarkTest(val, (chunk) => pool.run(chunk, { transferList: [chunk.buffer] })).finally(() => {
    return pool.destroy()
  })
}
