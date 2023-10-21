import { spawn, Pool, Worker } from "threads"
export default (val, cpus, times) => {
    const pool = Pool(() => spawn(new Worker("./threads.worker.mjs")), cpus);
    [...Array(cpus * times).keys()].forEach(() => pool.queue((m) => m(val)));
    return pool.completed().then(() => {
        return pool.terminate()
    })
}
