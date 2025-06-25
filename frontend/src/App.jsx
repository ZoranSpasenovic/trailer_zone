import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/homepage/HomePage";
import AuthPage from "./pages/auth/AuthPage";
import WatchPage from "./pages/watch/WatchPage";
import { Toaster } from "react-hot-toast";
import SearchPage from "./pages/search/SearchPage";
import HistoryPage from "./pages/history/HistoryPage";
import NotFound from "./pages/404/NotFound";
import GenrePage from "./pages/genre/genrePage";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    path: "/",
    children: [
      { element: <AuthPage />, path: "/auth" },
      {
        element: <MainLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "/watch/:id", element: <WatchPage /> },
          { path: "/search", element: <SearchPage /> },
          { path: "/history", element: <HistoryPage /> },
          { path: "/genre", element: <GenrePage /> },
          { path: "*", element: <NotFound /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
