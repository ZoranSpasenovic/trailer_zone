import { Search } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import SearchResults from "./SearchResults";
import { useContentStore } from "../../store/content";

const SearchPage = () => {
  const [searchType, setSearchType] = useState("movie");
  const [searchParams, setSearchParams] = useSearchParams();

  const { setContentType } = useContentStore();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchParams({ query: value });
  };

  const content = useSearch(searchType);

  const activeClass = "bg-[#FF8C00]";

  return (
    <div className="bg-[#330022] min-h-screen py-20 px-8">
      <div className="w-full flex flex-col items-center">
        <div className="flex space-x-4 text-[#330022]">
          <button
            onClick={() => {
              setSearchType("movie");
              setContentType("movie");
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
            }}
            className={` py-2 px-4 rounded-md font-semibold cursor-pointer ${
              searchType === "series" ? activeClass : "bg-[#FFD700]"
            } hover:bg-[#FF8C00]`}
          >
            Tv Shows
          </button>
          <button
            onClick={() => {
              setSearchType("person");
            }}
            className={` py-2 px-4 rounded-md font-semibold cursor-pointer ${
              searchType === "person" ? activeClass : "bg-[#FFD700]"
            } hover:bg-[#FF8C00]`}
          >
            Person
          </button>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
          className="mt-8 w-full max-w-lg space-x-2 flex items-center justify-center"
        >
          <input
            onChange={handleInputChange}
            className="border-[#FFD700] border-1 h-8 rounded-md flex-1 text-[#FFD700] px-2"
            type="text"
          />
          <button className="h-8 px-2 hover:bg-[#FF8C00] cursor-pointer rounded-lg  bg-[#FFD700]">
            <Search />
          </button>
        </form>
      </div>
      <SearchResults query={searchParams.get("query")} content={content} />
    </div>
  );
};

export default SearchPage;
