import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-semibold">404</h1>
      <p className="text-gray-500">Page not found</p>

      <Link to="/login">
        <Button>Go to Login</Button>
      </Link>
    </div>
  )
}

export default NotFound
