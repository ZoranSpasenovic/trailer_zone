import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
const Slider = ({ content }) => {
  const [showArrows, setShowArrows] = useState(false);

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: sliderRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <div
      onMouseEnter={() => {
        setShowArrows(true);
      }}
      onMouseLeave={() => {
        setShowArrows(false);
      }}
      className="px-5 md:px-20 relative bg-[#1a0011]"
    >
      <h2 className="mb-4 text-2xl font-bold">Similar TV Shows/Movies</h2>
      <div
        className="flex space-x-4 overflow-x-scroll scrollbar-hide"
        ref={sliderRef}
      >
        {content.map((item) => (
          <Link
            to={`/watch/${item.id}`}
            className=" min-w-[150px] sm:min-w-[250px] group
            
          "
            key={item.id}
          >
            <div className="rounded-lg overflow-hidden">
              <img
                src={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                    : "/fallback2.webp"
                }
                alt="Movie image"
                className="transition-transform duration-300 ease-in-out group-hover:scale-125"
              />
            </div>
            <p className="mt-2 text-center">{item.title || item.name}</p>
          </Link>
        ))}
      </div>
      {showArrows && (
        <>
          <button
            className="absolute top-1/2 -translate-y-1/2 left-5 md:left-24 flex items-center justify-center
            size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10 hover:cursor-pointer
            "
            onClick={scrollLeft}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className="absolute top-1/2 -translate-y-1/2 right-5 md:right-24 flex items-center justify-center
            size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10 hover:cursor-pointer
            "
            onClick={scrollRight}
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
    </div>
  );
};

export default Slider;
