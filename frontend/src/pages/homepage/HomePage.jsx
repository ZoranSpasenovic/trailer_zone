import useRandomContent from "../../hooks/useRandomContent";
import { Play, CircleAlert } from "lucide-react";
import useGenres from "../../hooks/useGenres";
import { getYear } from "../../helpers/getYear";
import { useState } from "react";

const HomePage = () => {
  const { randomContent } = useRandomContent("movie");
  const [imgLoading, setImgLoading] = useState(true);
  const genreIds = randomContent?.genre_ids ?? [];
  const genres = useGenres(genreIds);

  if (!randomContent)
    return (
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center -z-10 shimmer" />
    );

  const year = getYear(randomContent);

  return (
    <>
      <div className="h-screen relative">
        {imgLoading && (
          <div className="absolute top-0 left-0 w-full h-full bg-black/70 shimmer -z-10" />
        )}
        <img
          loading="lazy"
          onLoad={() => setImgLoading(false)}
          className={`absolute top-0 right-0 md:w-full h-full object-cover transition-opacity duration-500 -z-50 ${
            imgLoading ? "opacity-0" : "opacity-100"
          }`}
          // className="absolute top-0 right-0 md:w-full h-full object-cover  -z-50"
          src={`https://image.tmdb.org/t/p/original/${randomContent.backdrop_path}`}
          alt="Random movie image"
        />

        <div className="bg-[#330022]/50 absolute w-full h-screen top-0 right-0 -z-50" />

        <div className="bg-gradient-to-b -z-50 from-[#330022] via-transparent to-transparent absolute w-full h-full top-0 left-0" />
        <div className="absolute left-48 top-76 max-w-xl text-left text-[#FFD700]">
          <h1 className="text-5xl">
            {randomContent.title || randomContent.name}
          </h1>
          <span className="mt-2">
            {year} {""}| {""}
            {randomContent.vote_average !== 0 &&
              randomContent.vote_average.toFixed(1)}
          </span>
          <div>
            <ul className="flex gap-2">
              {genres.map((genre) => {
                return <li key={genre}>{genre}</li>;
              })}
            </ul>
          </div>
          <p className="mt-4">{randomContent.overview}</p>
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
    </>
  );
};

export default HomePage;
