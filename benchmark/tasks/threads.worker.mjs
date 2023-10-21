import compute from '../compute.mjs'
import { expose } from "threads/worker"

expose(compute)