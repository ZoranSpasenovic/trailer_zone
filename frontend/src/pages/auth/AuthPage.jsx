import { useEffect } from "react";
import { Loader } from "lucide-react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { useSearchParams, useNavigate } from "react-router-dom";
import useAuthCheck from "../../hooks/useAuthCheck";
import useRandomMovie from "../../hooks/useRandomMovie";

const AuthPage = () => {
  const [searchParams] = useSearchParams();

  const { loading, randomMovie } = useRandomMovie();

  const navigate = useNavigate();
  const { user, isCheckingAuth } = useAuthCheck();

  useEffect(() => {
    if (!isCheckingAuth && user) {
      navigate("/");
    }
  }, [user, isCheckingAuth, navigate]);

  const formType = searchParams.get("form") || "signup";

  const content = formType === "signup" ? <SignUpForm /> : <LoginForm />;

  if (loading || !randomMovie) {
    return (
      <div className="flex justify-center items-center ">
        <Loader className="w-6 h-6 mt-[50%] animate-spin" />
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://image.tmdb.org/t/p/original${randomMovie.backdrop_path})`,
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
