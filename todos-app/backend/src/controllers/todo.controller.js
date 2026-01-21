import Todo from "../models/todo.model.js"
import ApiError from "../utils/ApiError.js"

// GET /api/todos
export const getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find({ userId: req.userId })
    res.status(200).json(todos)
  } catch (error) {
    next(error)
  }
}

// POST /api/todos
export const createTodo = async (req, res, next) => {
  try {
    const { title } = req.body
    if (!title) throw new ApiError(400, "Title is required")

    const todo = await Todo.create({
      title,
      userId: req.userId,
    })

    res.status(201).json(todo)
  } catch (error) {
    next(error)
  }
}

// PUT /api/todos/:id
export const updateTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    if (!todo) throw new ApiError(404, "Todo not found")

    res.status(200).json(todo)
  } catch (error) {
    next(error)
  }
}

// DELETE /api/todos/:id
export const deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id)

    if (!todo) throw new ApiError(404, "Todo not found")

    res.status(204).send()
  } catch (error) {
    next(error)
  }
}
