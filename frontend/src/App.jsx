import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/homepage/HomePage";
import AuthPage from "./pages/auth/AuthPage";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    path: "/",
    children: [
      { element: <AuthPage />, path: "/auth" },
      {
        element: <MainLayout />,
        children: [{ index: true, element: <HomePage /> }],
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
