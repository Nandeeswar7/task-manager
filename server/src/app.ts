import  express = require('express')
import { useExpressServer } from 'routing-controllers'



const expressInstance = express()
const app = useExpressServer(expressInstance, {
    cors: true,
})

export { app }