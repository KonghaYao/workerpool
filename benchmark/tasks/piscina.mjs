import Piscina from 'piscina'
export default (val, cpus, times) => {
  const pool = new Piscina({
    filename: './tasks/piscina.worker.mjs',
    maxThreads: cpus
  })
  return Promise.all([...Array(cpus * times).keys()].map((arr) => pool.run(val))).then((res) => {
    return pool.destroy();
  })
}
