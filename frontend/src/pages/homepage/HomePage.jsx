import useRandomMovie from "../../hooks/useRandomMovie";
import { Loader, Play, CircleAlert } from "lucide-react";

const HomePage = () => {
  const { randomMovie, loading } = useRandomMovie();

  if (loading || !randomMovie) {
    return (
      <div className="flex justify-center items-center bg-[black]/60">
        <Loader className="w-6 h-6 mt-[50%] animate-spin" />
      </div>
    );
  }
  console.log(randomMovie);
  return (
    <div className="h-screen relative">
      <img
        loading="lazy"
        className="absolute top-0 right-0 md:w-full h-full object-cover  -z-50"
        src={`https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path}`}
        alt="Random movie image"
      />
      <div className="bg-[#330022]/50 absolute w-full h-screen top-0 right-0 -z-50" />

      <div className="bg-gradient-to-b -z-50 from-[#330022] via-transparent to-transparent absolute w-full h-full top-0 left-0" />
      <div className="absolute left-48 top-76 max-w-xl text-left text-[#FFD700]">
        <h1 className="text-5xl">{randomMovie.title}</h1>
        <span className="mt-2">
          {randomMovie.release_date.slice(0, 4)} || {""}
          {randomMovie.vote_average && randomMovie.vote_average.toFixed(1)}
        </span>
        <p className="mt-4">{randomMovie.overview}</p>
        <div className="flex gap-2 mt-4 items-center">
          <button className="flex gap-2 text-black bg-white/80 cursor-pointer px-4 py-2 rounded-md hover:bg-gray-400/70 transition-all duration-200">
            Play <Play className="text-black fill-current" />
          </button>
          <button className="flex gap-2  text-black bg-gray-400/70 cursor-pointer px-4 py-2 rounded-md hover:bg-white/80 transition-all duration-200">
            More info <CircleAlert />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
