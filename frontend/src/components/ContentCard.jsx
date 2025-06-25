import { Link } from "react-router-dom";

const ContentCard = ({ item }) => {
  return (
    <Link
      key={item.id}
      to={`/watch/${item.id}`}
      className="min-w-[150px] sm:min-w-[250px] relative z-50 transition-all ease-in duration-200 hover:scale-120 hover:z-51 "
    >
      <div className="rounded-lg ">
        <picture>
          <source
            media="(min-width: 640px)"
            srcSet={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
          />
          <img
            src={`https://image.tmdb.org/t/p/w342/${item.poster_path}`}
            alt={item.title || item.name}
            className="w-full h-auto rounded-lg"
          />
        </picture>
      </div>
      <div>
        <p className="text-center">{item.title || item.name}</p>
      </div>
    </Link>
  );
};

export default ContentCard;
