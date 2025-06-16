import { useState, useRef } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

const Cast = ({ cast }) => {
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
      className="px-5 md:px-20 relative overflow-visible bg-[#1a0011]"
    >
      <h2 className="pt-8 text-2xl text-center md:text-left font-bold">
        Starring
      </h2>
      <div
        className="flex space-x-4 overflow-x-scroll scrollbar-hide sm:py-8"
        ref={sliderRef}
      >
        {cast.map((item) => (
          <div
            className="hover:scale-125 transition-all duration-150 ease-in relative z-1 hover:z-2"
            key={item.id}
          >
            <div className="min-w-[150px] rounded-full overflow-hidden">
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w185/${item.profile_path}`
                    : "/fallback2.webp"
                }
                alt="Movie image"
                className="size-[150px] object-cover rounded-full transition-transform duration-300 ease-in-out"
              />
            </div>
            <p className="text-center font-semibold">{item.name}</p>
            <p className="text-center text-sm text-gray-400 italic">
              {item.character}
            </p>
          </div>
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

export default Cast;
