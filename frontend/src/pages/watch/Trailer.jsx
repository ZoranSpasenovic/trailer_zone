import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReactPlayer from "react-player";

const Trailer = ({ trailers }) => {
  const [trailerIdx, setTrailerIdx] = useState(0);
  const handleNextTrailer = () => {
    if (trailerIdx < trailers.length - 1)
      setTrailerIdx((prevState) => prevState + 1);
  };
  const handlePrevTrailer = () => {
    if (trailerIdx > 0) setTrailerIdx((prevState) => prevState - 1);
  };
  return (
    <div className="mx-auto container py-8 h-full">
      {trailers.length > 0 && (
        <div className="flex gap-2 p-8 items-center justify-between">
          <button
            onClick={handlePrevTrailer}
            className={`bg-gray-500/70 hover:bg-gray-500 rounded absolute left-0 md:static text-white py-1 px-2 md:py-2 md:px-4 cursor-pointer ${
              trailerIdx === 0
                ? "opacity-50 hover:bg-gray-500/70 hover:cursor-not-allowed"
                : ""
            }`}
          >
            <ChevronLeft />
          </button>
          <div className="flex-1 bg-black aspect-video rounded-md overflow-hidden ">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${trailers[trailerIdx].key}`}
              controls={true}
              width="100%"
              height="100%"
              playing={true}
            />
          </div>
          <button
            onClick={handleNextTrailer}
            className={`bg-gray-500/70 hover:bg-gray-500 rounded absolute right-0 md:static text-white py-1 px-2 md:py-2 md:px-4 cursor-pointer ${
              trailerIdx === trailers.length - 1
                ? "opacity-50 hover:bg-gray-500/70 hover:cursor-not-allowed"
                : ""
            }`}
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Trailer;
