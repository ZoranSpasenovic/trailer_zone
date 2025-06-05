import { useState, useEffect } from "react";
import { Loader } from "lucide-react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { useSearchParams, useNavigate, Navigate } from "react-router-dom";
import useAuthCheck from "../../hooks/useAuthCheck";

const AuthPage = () => {
  const [bgImg, setBgImg] = useState();
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const { user, isCheckingAuth } = useAuthCheck();

  useEffect(() => {
    if (!isCheckingAuth && user) {
      navigate("/");
    }
  }, [user, isCheckingAuth, navigate]);

  const formType = searchParams.get("form") || "signup";

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5050/api/v1/movie/trending", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setBgImg(data.backdrop_path);
        setLoading(false);
      });
  }, []);

  const content = formType === "signup" ? <SignUpForm /> : <LoginForm />;

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://image.tmdb.org/t/p/original${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-screen w-full"
    >
      <header></header>
      <div className="flex justify-center items-center ">
        {loading ? (
          <Loader className="w-6 h-6 mt-[50%] animate-spin" />
        ) : (
          content
        )}
      </div>
    </div>
  );
};

export default AuthPage;
