import { Button } from "@/components/ui/button"
import { useAuth } from "../../context/AuthContext"

const Navbar = ({ filter, setFilter }) => {
  const { logout } = useAuth()

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      <h1 className="text-xl font-semibold">Todos App</h1>

      <div className="flex gap-2">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button
          variant={filter === "completed" ? "default" : "outline"}
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
        <Button
          variant={filter === "pending" ? "default" : "outline"}
          onClick={() => setFilter("pending")}
        >
          Pending
        </Button>
      </div>

      <Button variant="destructive" onClick={logout}>
        Sign Out
      </Button>
    </nav>
  )
}

export default Navbar
