// node.js
var workerpool = require('workerpool');
const compute = require("../compute")
// create a worker and register public functions
workerpool.worker({
  compute
});
