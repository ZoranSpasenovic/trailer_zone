import { useState, useEffect } from "react";
import { Loader } from "lucide-react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { useSearchParams } from "react-router-dom";

const AuthPage = () => {
  const [bgImg, setBgImg] = useState();
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

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
        {loading ? <Loader /> : content}
      </div>
    </div>
  );
};

export default AuthPage;
