import { createBrowserRouter } from "react-router-dom"
import CovidPage from "@/pages/CovidPage"
import HomePage from "@/pages/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/covid",
    element: <CovidPage />,
  },
])

export default router
