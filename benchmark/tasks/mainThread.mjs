import createBenchmarkTest from '../createBenchmarkTest.mjs'
import compute from '../compute.mjs';
export default (val, cpus, times) => {
    return createBenchmarkTest(val, (chunk) => compute(chunk))
}