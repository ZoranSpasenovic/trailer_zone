import useRandomContent from "../../hooks/useRandomContent";
import { Play, CircleAlert } from "lucide-react";
import useGenres from "../../hooks/useGenres";
import { getYear } from "../../helpers/getYear";
import { useState } from "react";
import { useContentStore } from "../../store/content";
import { movieCtg, seriesCtg } from "../../constants/cattegories";
import Content from "./Content";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { randomContent } = useRandomContent("movie");
  const { contentType } = useContentStore();
  const [imgLoading, setImgLoading] = useState(true);
  const genreIds = randomContent?.genre_ids ?? [];
  const genres = useGenres(genreIds, contentType);

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
          src={`https://image.tmdb.org/t/p/original/${randomContent.backdrop_path}`}
          alt="Random movie image"
        />

        <div className="bg-[#330022]/50 absolute w-full h-screen top-0 right-0 -z-50" />

        <div className="bg-gradient-to-b -z-50 from-[#330022] via-transparent to-transparent absolute w-full h-full top-0 left-0" />
        <div className="absolute text-center top-42 md:left-48 md:top-76 max-w-xl md:text-left text-[#FFD700]">
          <h1 className="text-5xl">
            {randomContent.title || randomContent.name}
          </h1>
          <span className="mt-2">
            {year} {""}| {""}
            {randomContent.adult ? "18+" : "PG-13"}
          </span>
          <div>
            <ul className="flex gap-2 justify-center md:justify-start">
              {genres.map((genre) => {
                return <li key={genre}>{genre}</li>;
              })}
            </ul>
          </div>
          <p className="mt-4 px-4 md:px-0">
            {randomContent.overview.length > 200
              ? randomContent.overview.slice(0, 200) + "..."
              : randomContent.overview}
          </p>
          <div className="flex gap-2 mt-4 items-center justify-center md:justify-start">
            <Link
              to={`/watch/${randomContent.id}`}
              className="flex gap-2 text-black bg-white/80 cursor-pointer px-4 py-2 rounded-md hover:bg-gray-400/70 transition-all duration-200"
            >
              Play <Play className="text-black fill-current" />
            </Link>
            <Link
              to={`/watch/${randomContent.id}`}
              className="flex gap-2  text-black bg-gray-400/70 cursor-pointer px-4 py-2 rounded-md hover:bg-white/80 transition-all duration-200"
            >
              More info <CircleAlert />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 py-8 bg-[#330022] text-[#FFD700] overflow-x-hidden">
        {contentType === "movie"
          ? movieCtg.map((ctg) => {
              return <Content key={ctg} ctg={ctg} />;
            })
          : seriesCtg.map((ctg) => {
              return <Content key={ctg} ctg={ctg} />;
            })}
      </div>
    </>
  );
};

export default HomePage;
