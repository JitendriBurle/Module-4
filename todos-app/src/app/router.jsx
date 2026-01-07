import { createBrowserRouter, Navigate } from "react-router-dom"

import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Todos from "../pages/Todos"
import ProtectedRoute from "../routes/ProtectedRoute"
import NotFound from "../pages/NotFound"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/todos",
    element: (
      <ProtectedRoute>
        <Todos />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
])
