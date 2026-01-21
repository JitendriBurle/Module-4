import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "../../context/AuthContext"
import todoService from "../../services/todo.service"

const CreateTodo = ({ onCreated }) => {
  const { user } = useAuth()
  const [title, setTitle] = useState("")
  const [loading, setLoading] = useState(false)

  const handleCreate = async () => {
    if (!title.trim()) return

    setLoading(true)
    await todoService.createTodo(user.uid, title)
    setTitle("")
    setLoading(false)
    onCreated()
  }

  return (
    <div className="flex gap-2">
      <Input
        placeholder="New todo..."
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <Button onClick={handleCreate} disabled={loading}>
        Add
      </Button>
    </div>
  )
}

export default CreateTodo
