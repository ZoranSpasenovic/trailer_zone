import { Link } from "react-router-dom";
import { Clapperboard, ArrowLeftCircle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#330022] text-[#FFD700] px-4 text-center">
      <Clapperboard className="size-20 mb-4 animate-bounce" />
      <h1 className="text-5xl font-bold mb-2">404 - Scene Not Found</h1>
      <p className="text-[#BFAF60] text-lg mb-6">
        Looks like this scene didn't make the final cut. 🎞️
        <br />
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="flex items-center gap-2 bg-[#FFD700] hover:bg-[#FF8C00] text-[#330022] font-semibold py-2 px-4 rounded-md"
      >
        <ArrowLeftCircle className="size-5" />
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
