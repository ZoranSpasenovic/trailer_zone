import { useState } from "react";
import { useContentStore } from "../../store/content";
import SelectComponent from "./SelectComponent";
import useGenreSearch from "../../hooks/useGenreSearch";
import Pagination from "./Pagination";
import useGenres from "../../hooks/useGenres";
import Shimmer from "../../components/Shimmer";
import ContentCard from "../../components/ContentCard";
import useScrollToTop from "../../hooks/useScrollToTop";

const GenrePage = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [searchType, setSearchType] = useState("movie");
  const [page, setPage] = useState(1);
  const { setContentType } = useContentStore();

  useScrollToTop();

  const activeClass = "bg-[#FF8C00]";
  const { content, loading, totalPages } = useGenreSearch(
    selectedGenres,
    searchType,
    page
  );

  const genreNames = useGenres(selectedGenres, searchType);

  return (
    <div className="flex flex-col justify-between py-8 bg-[#330022] text-[#FFD700] min-h-screen">
      <div className="flex flex-col gap-4">
        <div className="w-full flex justify-center md:justify-start pt-20 md:px-20">
          <div className="flex space-x-4 text-[#330022]">
            <button
              onClick={() => {
                setSearchType("movie");
                setContentType("movie");
                setPage(1);
              }}
              className={` py-2 px-4 rounded-md font-semibold cursor-pointer ${
                searchType === "movie" ? activeClass : "bg-[#FFD700]"
              } hover:bg-[#FF8C00]`}
            >
              Movies
            </button>
            <button
              onClick={() => {
                setSearchType("series");
                setContentType("series");
                setPage(1);
              }}
              className={` py-2 px-4 rounded-md font-semibold cursor-pointer ${
                searchType === "series" ? activeClass : "bg-[#FFD700]"
              } hover:bg-[#FF8C00]`}
            >
              Tv Shows
            </button>
          </div>
        </div>
        <div className="px-20 flex justify-center md:justify-start w-full">
          <SelectComponent setSelectedGenres={setSelectedGenres} />
        </div>
        <div className="bg-[#330022] text-[#FFD700] relative px-5 lg:px-20 ">
          <h2 className="mb-2 text-2xl font-bold">
            {selectedGenres.length > 0
              ? `Search results for genres: ${genreNames.join(", ")}`
              : "Select genres to view results"}
          </h2>
          {loading ? (
            <Shimmer />
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 gap-4 mt-8">
              {content &&
                content.map((item) => {
                  return <ContentCard item={item} />;
                })}
            </div>
          )}
        </div>
      </div>

      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default GenrePage;
