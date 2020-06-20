import axios from 'axios'
import { BASE_URL } from '../CONSTS_AND_TYPES'

export default axios.create({
  baseURL: BASE_URL,
})
