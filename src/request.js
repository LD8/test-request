import { extend } from 'umi-request'

const request = extend({ prefix: 'https://jsonplaceholder.typicode.com' })

export default request
