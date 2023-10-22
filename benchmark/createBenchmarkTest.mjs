/**
 * Run Task and Record time
 * @param {Buffer[]} files 
 * @param {function} runMultiThreads 
 */
export default async function createBenchmarkTest(files, runMultiThreads) {
    return Promise.all(files.map(async chunk => {
        const start = performance.now()
        await runMultiThreads(chunk)
        const end = performance.now() - start
        return end
    }))
}