import { Link } from "react-router-dom";

const SearchResults = ({ content, type }) => {
  return (
    <div className="bg-[#330022] text-[#FFD700] relative px-5 lg:px-20 ">
      <h2 className="mb-2 text-2xl font-bold"></h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 gap-4">
        {content.map((item) => {
          if (!item.profile_path && !item.poster_path) return null;
          return (
            <Link
              key={item.id}
              to={`/watch/${item.id}`}
              className="min-w-[150px] sm:min-w-[250px] relative z-50 transition-all ease-in duration-200 hover:scale-120 hover:z-51 "
            >
              <div className="rounded-lg ">
                <img
                  src={
                    type === "person"
                      ? `https://image.tmdb.org/t/p/original/${item.profile_path}`
                      : `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                  }
                  alt={item.title || item.name}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div>
                <p className="text-center">{item.title || item.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
