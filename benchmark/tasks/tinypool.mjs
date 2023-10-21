import { Tinypool } from 'tinypool'
export default (val, cpus, times) => {
    const pool = new Tinypool({
        filename: "./tasks/tinypool.worker.mjs",
        maxThreads: cpus
    })
    return Promise.all([...Array(cpus * times).keys()].map((arr) => pool.run(val))).then((res) => {
        return pool.destroy()
    })
}