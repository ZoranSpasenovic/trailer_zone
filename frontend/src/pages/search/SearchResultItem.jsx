import { useState } from "react";

const SearchResultItem = ({ item }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const imageUrl = item.profile_path
    ? `https://image.tmdb.org/t/p/original/${item.profile_path}`
    : item.poster_path
    ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
    : null;

  return (
    <div className="rounded-lg overflow-hidden">
      <div className="relative w-full aspect-[2/3] bg-[#444] rounded-lg">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-[#444] animate-pulse rounded-lg z-0" />
        )}

        {imageUrl && (
          <img
            src={imageUrl}
            alt={item.name || item.title}
            onLoad={() => setImageLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 rounded-lg z-10 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>
      <p className="text-center mt-2 text-sm">{item.title || item.name}</p>
    </div>
  );
};

export default SearchResultItem;
