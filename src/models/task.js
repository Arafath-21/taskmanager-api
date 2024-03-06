import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
},{
  collection:'tasks'
})

const taskModel = mongoose.model('tasks',TaskSchema)
export default taskModel;