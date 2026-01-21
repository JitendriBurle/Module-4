import { Button } from "@/components/ui/button"
import { useAuth } from "../../context/AuthContext"
import todoService from "../../services/todo.service"
import UpdateTodoModal from "./UpdateTodoModal"

const TodoDetails = ({ todo, refreshTodos }) => {
  const { user } = useAuth()

  const reload = async () => {
    const data = await todoService.getTodos(user.uid)
    refreshTodos(data)
  }

  const toggleStatus = async () => {
    await todoService.updateTodo(user.uid, todo.id, {
      completed: !todo.completed,
    })
    reload()
  }

  const deleteTodo = async () => {
    await todoService.deleteTodo(user.uid, todo.id)
    reload()
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">{todo.title}</h2>

      <p>Status: {todo.completed ? "Completed" : "Pending"}</p>

      <div className="flex gap-2">
        <Button onClick={toggleStatus}>
          Toggle Status
        </Button>

        <UpdateTodoModal todo={todo} onUpdated={reload} />

        <Button variant="destructive" onClick={deleteTodo}>
          Delete
        </Button>
      </div>
    </div>
  )
}

export default TodoDetails
