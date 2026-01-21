const Sidebar = ({ todos, selectedTodo, onSelect }) => {
  return (
    <aside className="w-64 border-r p-4 space-y-2">
      {todos.map(todo => (
        <div
          key={todo.id}
          onClick={() => onSelect(todo)}
          className={`p-2 rounded cursor-pointer ${
            selectedTodo?.id === todo.id
              ? "bg-gray-200"
              : "hover:bg-gray-100"
          }`}
        >
          <p className={todo.completed ? "line-through text-gray-500" : ""}>
            {todo.title}
          </p>
        </div>
      ))}
    </aside>
  )
}

export default Sidebar
