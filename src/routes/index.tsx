import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary.component";
import SideBar from "@/components/SideBar/SideBar.component";
import CovidPage from "@/pages/CovidPage";
import HomePage from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <SideBar />,
    ErrorBoundary,
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
]);

export default router;
