import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import useAuthCheck from "../hooks/useAuthCheck";
import Footer from "../components/Footer";

const MainLayout = () => {
  const { user, isCheckingAuth } = useAuthCheck();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isCheckingAuth && !user) {
      navigate("/auth?form=login");
    }
  }, [isCheckingAuth, user, navigate]);

  if (isCheckingAuth) {
    return (
      <div className="h-screen relative bg-[#220055] justify-center items-center flex">
        <div className="absolute inset-0 bg-black/60"></div>
        <Loader className="animate-spin size-10 z-10 text-[#FFD700]" />
      </div>
    );
  }
  return (
    <>
      <NavBar />

      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
