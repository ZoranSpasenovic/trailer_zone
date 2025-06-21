import { Star, Link } from "lucide-react";

const MovieDetails = ({ data }) => {
  const genres =
    data?.genres?.map((genre) => {
      return genre.name;
    }) ?? [];
  console.log(data);
  const hrs = Math.floor(data.runtime / 60);
  const mins = data.runtime % 60;
  const runtime = `${hrs}h ${mins}min`;

  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = data?.release_date
    ? new Date(data.release_date).toLocaleDateString("en-US", dateOptions)
    : data?.first_air_date
    ? new Date(data.first_air_date).toLocaleDateString("en-US", dateOptions)
    : "Unknown";

  const renderStars = (rating) => {
    const fullStars = Math.floor(+rating / 2);
    const decimalPart = +rating / 2 - fullStars;
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} fill="#FFD700" stroke="#FFD700" className="w-5 h-5" />
        );
      } else if (i === fullStars && decimalPart > 0) {
        stars.push(
          <div key={i} className="relative w-5 h-5">
            <Star stroke="#FFD700" className="w-5 h-5" />
            <div
              className="absolute top-0 left-0 h-full overflow-hidden"
              style={{ width: `${decimalPart * 100}%` }}
            >
              <Star fill="#FFD700" stroke="#FFD700" className="w-5 h-5" />
            </div>
          </div>
        );
      } else {
        stars.push(<Star key={i} stroke="#FFD700" className="w-5 h-5" />);
      }
    }

    return stars;
  };

  return (
    <div className="flex flex-col px-8 pb-16 gap-4 pt-25 justify-evenly items-center md:flex-row md:h-screen">
      <div className="rounded-lg overflow-hidden max-w-100 h-full flex-1">
        <img
          src={
            data.poster_path
              ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
              : "/fallback1.webp"
          }
          alt="Movie image"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="flex flex-col flex-1 justify-start items-center max-w-xl gap-4 md:h-full">
        <div className="md:w-full">
          <h2 className="text-3xl font-bold ">{data.title || data.name}</h2>
          <span className="italic text-center block text-sm md:text-left">
            {data.tagline}
          </span>
        </div>
        {genres && (
          <ul className="flex justify-start gap-4 md:w-full">
            {genres.map((genre) => (
              <li
                className="px-4 py-2 text-[#550044] bg-[#FFD700] font-bold border-1 rounded-md"
                key={genre}
              >
                {genre}
              </li>
            ))}
          </ul>
        )}
        <div className="text-sm md:w-full flex flex-wrap gap-x-2">
          <span>
            {data.runtime ? runtime : data.number_of_seasons + " seasons"}
          </span>
          <span>·</span>
          <span>{formattedDate}</span>
          <span>·</span>
          <span>{data.status}</span>
        </div>

        <p className="text-center md:text-left">{data.overview}</p>
        <div className="text-sm md:w-full flex flex-wrap gap-2">
          {data.spoken_languages &&
            data.spoken_languages.map((lang) => (
              <span
                key={lang.iso_639_1}
                className="px-2 py-1 bg-[#FFD700] text-[#550044] rounded-md text-xs font-semibold"
              >
                {lang.english_name}
              </span>
            ))}
        </div>
        <div className="flex md:w-full">
          {data.vote_average && renderStars(data.vote_average)}
        </div>
        {data.homepage && (
          <div className="md:w-full">
            <a
              href={data.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#FFD700] hover:underline"
            >
              <Link className="size-5" />
              Official Website
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
