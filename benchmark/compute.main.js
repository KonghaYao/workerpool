const mergeSort = require('./mergeSort')

const benchmarkTest = async (array, execFunction, cpus) => {
    const numThreads = cpus;
    const threadsResult = new Array(numThreads);
    const partitionSize = Math.ceil(array.length / numThreads);
    const promises = []
    let i = 0;
    for (let startIndex = 0; startIndex < array.length; startIndex += partitionSize) {
        const endIndex = Math.min(startIndex + partitionSize, array.length);
        const partition = array.slice(startIndex, endIndex);
        const p = execFunction(partition).then(result => {
            threadsResult[i] = result;
        })
        promises.push(p)
    }
    await Promise.all(promises)
    return mergeSort(threadsResult.flat());
}

module.exports = benchmarkTest