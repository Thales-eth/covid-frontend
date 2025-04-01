import { createBrowserRouter } from "react-router-dom"
import CovidPage from "@/pages/CovidPage"
import HomePage from "@/pages/Home"
import SideBar from "@/components/SideBar/SideBar.component"

const router = createBrowserRouter([
  {
    path: "/",
    element: <SideBar />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/covid",
        element: <CovidPage />,
      },
    ],
  },
])

export default router
