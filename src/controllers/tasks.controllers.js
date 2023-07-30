import Task from '../models/task.model.js'

export const getTasks = async (req , res ) => {
    const task = await Task.find({
        // esto trae todas las tareas q tenia creado este usuario
        user : req.user.id
    }).populate('user')
    res.json(task)
}

export const getTask = async (req , res ) => {
    const task = await Task.findById(req.params.id).populate('user')
    if (!task) return res.status(404).json({message : "Task not found"})
    res.json(task)
}   

export const createTasks = async (req , res ) => {
    const { title , description, date} = req.body
    const newTask = new Task({
        title,
        description,
        date,
        user : req.user.id
    })
    const savedTask = await newTask.save()
    res.json(savedTask)    
}

export const updateTasks = async (req , res ) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body,{
        new : true
    })
    if (!task) return res.status(404).json({message : "Task not found"})
    res.json(task)
}

export const deleteTasks = async (req , res ) => {
    const task = await Task.findByIdAndDelete(req.params.id)
    if (!task) return res.status(404).json({message : "Task not found"})
    return res.sendStatus(204)
}