import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useAuth } from "../../context/AuthContext"
import todoService from "../../services/todo.service"

const UpdateTodoModal = ({ todo, onUpdated }) => {
  const { user } = useAuth()
  const [title, setTitle] = useState(todo.title)

  const handleUpdate = async () => {
    await todoService.updateTodo(user.uid, todo.id, { title })
    onUpdated()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
        </DialogHeader>

        <Input
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <Button onClick={handleUpdate}>
          Save Changes
        </Button>
      </DialogContent>
    </Dialog>
  )
}

export default UpdateTodoModal
