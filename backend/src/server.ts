import 'dotenv/config'
import env from './util/validateEnv'
import express from 'express'
import connectDB from './config/db'
import createTask from './routes/tasks'
import getTasks from './routes/tasks'
import deleteTask from './routes/tasks'
import updateTask from './routes/tasks'
const app = express()
const cors = require('cors')
connectDB()
const PORT = env.PORT

app.use((cors()))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/', createTask)
app.use('/api/', getTasks)
app.use('/api/', updateTask)
app.use('/api/', deleteTask)

app.listen(PORT, () => {
    console.log('server is running on', PORT)
})