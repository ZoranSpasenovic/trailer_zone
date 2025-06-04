import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/homepage/HomePage";
import AuthPage from "./pages/auth/AuthPage";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    path: "/",
    children: [
      { index: true, element: <HomePage /> },
      { element: <AuthPage />, path: "/auth" },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
