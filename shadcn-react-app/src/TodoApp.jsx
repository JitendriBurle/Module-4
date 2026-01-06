import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "./components/ui/card"
import { Input } from "./components/ui/input"
import { Button } from "./components/ui/button"
import { Checkbox } from "./components/ui/checkbox"

export default function TodoApp() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    if (!todo) return
    setTodos([...todos, { text: todo, done: false }])
    setTodo("")
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Todo List</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input value={todo} placeholder="Add todo"
            onChange={(e) => setTodo(e.target.value)} />
          <Button onClick={addTodo}>Add</Button>
        </div>

        {todos.map((t, i) => (
          <div key={i} className="flex items-center gap-2">
            <Checkbox checked={t.done}
              onCheckedChange={() =>
                setTodos(
                  todos.map((item, idx) =>
                    idx === i ? { ...item, done: !item.done } : item
                  )
                )
              } />
            <span className={t.done ? "line-through text-gray-500" : ""}>
              {t.text}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
