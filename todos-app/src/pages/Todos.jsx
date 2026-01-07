import { useEffect, useState } from "react"
import { useAuth } from "../context/AuthContext"
import todoService from "../services/todo.service"

import Navbar from "../components/layout/Navbar"
import Sidebar from "../components/layout/Sidebar"
import Footer from "../components/layout/Footer"
import TodoDetails from "../components/todos/TodoDetails"
import CreateTodo from "../components/todos/CreateTodo"

const Todos = () => {
  const { user } = useAuth()

  const [todos, setTodos] = useState([])
  const [selectedTodo, setSelectedTodo] = useState(null)
  const [filter, setFilter] = useState("all")

  const loadTodos = async () => {
    if (!user) return

    const data = await todoService.getTodos(user.uid)
    setTodos(data)
    setSelectedTodo(data[0] || null)
  }

  useEffect(() => {
    loadTodos()
  }, [user])

  const filteredTodos = todos.filter(todo => {
    if (filter === "completed") return todo.completed
    if (filter === "pending") return !todo.completed
    return true
  })

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar filter={filter} setFilter={setFilter} />

      <div className="flex flex-1">
        <Sidebar
          todos={filteredTodos}
          selectedTodo={selectedTodo}
          onSelect={setSelectedTodo}
        />

        <main className="flex-1 p-6 space-y-6">
          <CreateTodo onCreated={loadTodos} />

          {selectedTodo ? (
            <TodoDetails
              todo={selectedTodo}
              refreshTodos={setTodos}
            />
          ) : (
            <p className="text-gray-500">
              Select a todo to view details
            </p>
          )}
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default Todos
