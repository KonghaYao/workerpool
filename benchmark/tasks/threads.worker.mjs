import compute from '../compute.mjs'
import { Transfer, expose } from "threads/worker"

expose((buffer) => {
    const res = compute(buffer)
    return Transfer(res, [res.buffer])
})