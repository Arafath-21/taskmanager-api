import express from 'express'
import taskRoutes from './tasks.js'
const router = express.Router()

router.use('/api/v1/tasks',taskRoutes)


export default router