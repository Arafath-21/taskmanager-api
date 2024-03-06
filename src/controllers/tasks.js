import taskModel from '../models/task.js';


const getAllTasks = async (req,res)=>{
    try {
        const tasks = await taskModel.find({})// get all documnets    
        res.status(200).send({tasks})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const createTask = async (req,res)=>{
    try {
        const task = await taskModel.create(req.body)
        res.status(201).json({task})        
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const getTask = async (req,res)=>{
    try {
        const {id:taskID} = req.params
        const task = await taskModel.findOne({_id:taskID})

        if (!task) {
            res.status(404).send(`no task with id : ${taskID}`)
        }else{
            res.status(200).json({task})
        }

    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const deleteTask = async (req,res)=>{
    const {id:taskID} = req.params
    const task = await taskModel.findOneAndDelete({_id:taskID})
    try {
        if (!task) {
            res.status(404).send(`no task with id : ${taskID}`)
        }else{
            res.status(200).json({task})
        }
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const updateTask = async (req,res)=>{
    const {id:taskID} = req.params
    const task = await taskModel.findOneAndUpdate({_id:taskID},req.body,{
        runValidators:true,new:true
    })
    try {
        if (!task) {
            res.status(404).send(`no task with id : ${taskID}`)
        } else {
            res.status(200).send({task})
        }
    } catch (error) {
        res.status(500).json({msg:error})
    }
    
}

export default {
    getAllTasks,createTask,getTask,updateTask,deleteTask
}