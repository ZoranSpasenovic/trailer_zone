import { useEffect, useState } from "react";
import { useContentStore } from "../../store/content";
import axios from "axios";
import { Link } from "react-router-dom";

const Content = ({ ctg }) => {
  const [content, setContent] = useState(null);
  const { contentType } = useContentStore();

  useEffect(() => {
    const getContent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5050/api/v1/${contentType}/${ctg}`,
          {
            withCredentials: true,
          }
        );

        setContent(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getContent();
  }, [contentType, ctg]);

  const contentTitle = contentType === "movie" ? "Movies" : "TV Shows";
  const ctgTitle = ctg
    .split("_")
    .map((ctg) => {
      return ctg[0].toUpperCase() + ctg.slice(1);
    })
    .join(" ");

  if (!content)
    return (
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center -z-10 shimmer" />
    );

  return (
    <div className="bg-[#330022] text-[#FFD700] relative px-5 lg:px-20 ">
      <h2 className="mb-2 text-2xl font-bold">
        {ctgTitle + " " + contentTitle}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 gap-4">
        {content.map((item) => {
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
        })}
      </div>
    </div>
  );
};

export default Content;
