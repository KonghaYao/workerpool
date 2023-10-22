
import workerpool from "./tasks/workerpool.mjs";
import piscina from "./tasks/piscina.mjs";
import tinypool from "./tasks/tinypool.mjs";
import threads from "./tasks/threads.mjs";
import mainThread from "./tasks/mainThread.mjs";
import compute from "./compute.mjs";

// a font from google fonts
const bufferSample = await fetch('https://github.com/google/fonts/raw/main/ofl/acme/Acme-Regular.ttf').then(res => res.arrayBuffer()).then((b) => Buffer.from(b))

const start = performance.now()
compute(bufferSample)
const duration = performance.now() - start
console.log('run one time need', duration, 'ms')


const simpleBenchMark = async (title, fn) => {
    console.log(title)
    const totalBuffer = [...Array(10).keys()].map(i => Buffer.from(bufferSample))
    return fn(totalBuffer, 4).then((res) => {
        console.log(title, res)
    })

}
await simpleBenchMark('mainThread', mainThread)
await simpleBenchMark('workerpool', workerpool)
await simpleBenchMark('tinypool', tinypool)
await simpleBenchMark('piscina', piscina)
await simpleBenchMark('threads', threads)