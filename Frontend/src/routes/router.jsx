import { createBrowserRouter } from "react-router-dom";

import ArenaPage from "../pages/ArenaPage";
import BattlePage from "../pages/BattlePage";
import ModelsPage from "../pages/ModelsPage";
import AboutPage from "../pages/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ArenaPage />,
  },

  {
    path: "/battle/:id",
    element: <BattlePage />,
  },

  {
    path: "/models",
    element: <ModelsPage />,
  },

  {
    path: "/about",
    element: <AboutPage />,
  },

  {
    path: "*",
    element: (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50">
        <h1 className="text-6xl font-bold text-indigo-600">404</h1>

        <p className="mt-4 text-slate-500">Page Not Found</p>
      </div>
    ),
  },
]);

export default router;
