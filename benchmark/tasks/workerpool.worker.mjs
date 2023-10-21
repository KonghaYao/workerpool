import { worker } from 'workerpool'
import compute from '../compute.mjs'
worker({ compute })
