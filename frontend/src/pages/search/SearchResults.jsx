import { Link } from "react-router-dom";
import SearchResultItem from "./SearchResultItem";

const SearchResults = ({ content, query }) => {
  if (!query || query.length === 0) {
    return (
      <div className="bg-[#330022] text-[#FFD700] relative px-5 lg:px-20 ">
        <h2 className="mt-8 text-2xl font-bold">
          Looking for something? Start typing above.
        </h2>
      </div>
    );
  }
  return (
    <div className="bg-[#330022] text-[#FFD700] relative px-5 lg:px-20 ">
      <h2 className="mt-8 pb-8 text-2xl font-bold">
        Search results for: "{query}"
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 gap-4">
        {content.map((item) => {
          if (!item.profile_path && !item.poster_path) return null;
          return (
            <Link
              key={item.id}
              to={`/watch/${item.id}`}
              className="min-w-[150px] sm:min-w-[250px] relative z-50 transition-all ease-in duration-200 hover:scale-120 hover:z-51 "
            >
              <SearchResultItem item={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
