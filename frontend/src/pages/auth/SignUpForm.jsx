import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authUser";
import { Loader } from "lucide-react";

const SignUpForm = () => {
  const store = useAuthStore();

  const { signUp, loading } = store;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    await signUp(data);
  };

  return (
    <div className="max-w-md w-full p-8 rounded-lg space-y-6 bg-[#330066]/60 mt-16  ">
      <h1 className="text-[#FFD700] text-2xl">Register</h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
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
        <div className="w-full bg-[#7932ac]/60 relative rounded-md ">
          <label
            className="text-[#FFD700] absolute top-1 left-4"
            htmlFor="username"
          >
            Username
          </label>
          <input
            name="username"
            className="w-full text-[#FFD700] h-full p-4 pt-8"
            type="text"
          />
        </div>
        <div className="w-full bg-[#7932ac]/60 relative rounded-md ">
          <label
            className="text-[#FFD700] absolute top-1 left-4"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full text-[#FFD700] h-full p-4 pt-8"
            type="password"
            name="password"
          />
        </div>
        <div className="w-full bg-[#7932ac]/60 relative rounded-md ">
          <label
            className="text-[#FFD700] absolute top-1 left-4"
            htmlFor="confirm_password"
          >
            Confirm Password
          </label>
          <input
            className="w-full text-[#FFD700] h-full p-4 pt-8"
            type="password"
            name="confirm_password"
          />
        </div>

        <button
          className="bg-[#FFD700] z-10 opacity-100 text-2xl text-[#7932ac] py-2 px-4 w-full mt-8 rounded-md hover:cursor-pointer hover:bg-[#FF8C00]"
          type="submit"
        >
          Sign up
          {loading && <Loader className="animate-spin w-6 h-6" />}
        </button>
      </form>
      <div className="w-full text-[#FFD700]">
        <p>
          Already have an account?
          <Link
            className="text-[#FF8C00] hover:underline ml-2"
            to="/auth?form=login"
          >
            Login here now.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
