import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authUser";
import { Loader } from "lucide-react";

const LoginForm = () => {
  const { login, loading } = useAuthStore();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    await login(data);
  };

  return (
    <div className="max-w-md w-full p-8 rounded-lg space-y-6 bg-[#330066]/60 mt-32  ">
      <h1 className="text-[#FFD700] text-2xl">Sign in</h1>
      <form onSubmit={handleSubmit}>
        <div className="w-full bg-[#7932ac]/60 relative rounded-md">
          <label
            className="text-[#FFD700] absolute top-1 left-4"
            htmlFor="email"
          >
            E-mail adress
          </label>
          <input
            name="email"
            className="w-full text-[#FFD700] h-full p-4 pt-8"
            type="email"
          />
        </div>
        <div className="w-full bg-[#7932ac]/60 relative rounded-md mt-8">
          <label
            className="text-[#FFD700] absolute top-1 left-4"
            htmlFor="email"
          >
            Password
          </label>
          <input
            className="w-full text-[#FFD700] h-full p-4 pt-8"
            type="password"
            name="password"
          />
        </div>

        <button
          className="bg-[#FFD700] z-10 opacity-100 text-2xl text-[#7932ac] py-2 px-4 w-full mt-8 rounded-md hover:cursor-pointer hover:bg-[#FF8C00]"
          type="submit"
        >
          {loading ? (
            <Loader className="w-6 h-6 animate-spin mx-auto" />
          ) : (
            "Login"
          )}
        </button>
      </form>
      <div className="w-full text-[#FFD700]">
        <p>
          You don't have an account?
          <Link
            className="text-[#FF8C00] hover:underlßine"
            to="/auth?form=signup"
          >
            Sign up now.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
