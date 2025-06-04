import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "lucide-react";

const SignUp = () => {
  const [bgImg, setBgImg] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    if (data.password !== data.confirm_password) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5050/api/v1/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });
      const res = await response.json();

      if (!response.ok) throw new Error(res.message);
      e.target.reset();
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

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
          <Loader className="w-6 h-6 mt-[50%] bg-[#330066] animate-spin" />
        ) : (
          <div className="max-w-md w-full p-8 rounded-lg space-y-6 bg-[#330066]/60 mt-32  ">
            <h1 className="text-[#FFD700] text-2xl">Register</h1>
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
              <div className="w-full bg-[#7932ac]/60 relative rounded-md mt-8">
                <label
                  className="text-[#FFD700] absolute top-1 left-4"
                  htmlFor="email"
                >
                  Confirm Password
                </label>
                <input
                  className="w-full text-[#FFD700] h-full p-4 pt-8"
                  type="password"
                  name="confirm_password"
                />
              </div>
              {error && <p className="text-red-400 mt-2">{error}</p>}
              <button
                className="bg-[#FFD700] z-10 opacity-100 text-2xl text-[#7932ac] py-2 px-4 w-full mt-8 rounded-md hover:cursor-pointer hover:bg-[#FF8C00]"
                type="submit"
              >
                Sign up
              </button>
            </form>
            <div className="w-full text-[#FFD700]">
              <p>
                Already have an account?
                <Link
                  className="text-[#FF8C00] hover:underline ml-2"
                  to="/login"
                >
                  Login here now.
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
