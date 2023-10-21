import { add, complete, cycle, suite } from "benny";
import workerpool from "./tasks/workerpool.mjs";
import piscina from "./tasks/piscina.mjs";
import tinypool from "./tasks/tinypool.mjs";
import threads from "./tasks/threads.mjs";
const text = "This is a Benchmark";
await suite(
    "Worker Pool in Nodejs",
    // fn(inputText, cpus , times) it will run 'cpus * times' one time
    add("WorkerPool", () => workerpool(text, 4, 10)),
    add("TinyPool", () => tinypool(text, 4, 10)),
    add("Piscina", () => piscina(text, 4, 10)),
    add("Threads", () => threads(text, 4, 10)),
    cycle(),
    complete()
);
