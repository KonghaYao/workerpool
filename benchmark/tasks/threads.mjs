import { spawn, Pool, Worker, Transfer } from "threads"
import createBenchmarkTest from "../createBenchmarkTest.mjs";
export default (val, cpus, times) => {
    const pool = Pool(() => spawn(new Worker("./threads.worker.mjs")), cpus);
    const records = createBenchmarkTest(val, (chunk) => pool.queue(async (m) => m(Transfer(chunk, [chunk.buffer]))))
    return pool.completed().then(() => {
        return records
    }).finally(() => {
        pool.terminate()
    })
}
