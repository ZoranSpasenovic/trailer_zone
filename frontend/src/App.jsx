import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    path: "/",
    children: [
      { index: true, element: <HomePage /> },
      { element: <SignUp />, path: "/signup" },
      { element: <Login />, path: "/login" },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
