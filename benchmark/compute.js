const mergeSort = require('./mergeSort')
module.exports = function (plaintext) {
    const partition  = JSON.parse(plaintext);
    const sortedPartition = mergeSort(partition);
    return sortedPartition
}
