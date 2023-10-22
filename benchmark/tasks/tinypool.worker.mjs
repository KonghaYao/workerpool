import compute from "../compute.mjs"
export default ({ port }) => {
    return new Promise((resolve) => {
        port.on('message', (message) => {
            const buffer = compute(message)
            port.postMessage(buffer, [buffer.buffer])
            resolve()
        })
    })
}