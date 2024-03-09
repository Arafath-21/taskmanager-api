import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import appRoutes from './src/routes/index.js'
import connectDB from './src/db/index.js'
import notFound from './src/middleware/not-found.js'
const app = express()
dotenv.config()
const port = process.env.port || 3000

 //middleware
app.use(express.static('./src/public')) 
app.use(cors())
app.use(express.json())

//routes
app.use(appRoutes)
app.use(notFound)

const startServer = async ()=>{
    try {
        await connectDB();
        app.listen(port,console.log(`server is listening on ${port}`));
    } catch (error) {
        console.log(error);
    }
}

startServer();