import { Tinypool } from 'tinypool'
import createBenchmarkTest from '../createBenchmarkTest.mjs'
export default (val, cpus, times) => {
    const pool = new Tinypool({
        filename: "./tasks/tinypool.worker.mjs",
        maxThreads: cpus
    })
    return createBenchmarkTest(val, async (chunk) => {
        const { port1, port2 } = new MessageChannel()
        const promise = pool.run({ port: port1 }, { transferList: [port1] })
        port2.postMessage(chunk, [chunk.buffer])
        await promise
        port1.close()
        port2.close()
    }).finally(() => {
        pool.destroy()
    })
}