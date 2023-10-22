import { worker, Transfer } from 'workerpool'
import compute from '../compute.mjs'
worker({
    compute(buffer) {
        const array = compute(buffer)
        return new Transfer(array, [array.buffer])
    }
})
