import express from 'express'
import cors from 'cors'
import rutas from './src/routes/rutas.js'
import rutasLog from './src/routes/auth.routes.js'
import { authentication } from './src/middleware/authentication.js'

const app = express()
const PORT = 5000

const corsOptions = {
    origin: [`http://localhost:${PORT}`],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Length'],
    credentials: true,
    maxAge: 600,
    optionsSuccessStatus: 204
}

app.use(cors(corsOptions))
app.use(express.json())

app.use('/api', rutasLog)
app.use(authentication)

app.use('/api', rutas)

app.use((req, res, next)=>{
    res.status(404).send(`ruta invalida`)
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});