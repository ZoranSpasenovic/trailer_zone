import { useParams } from "react-router-dom";
import useContentTrailer from "../../hooks/useContentTrailer";
import useSimilarContent from "../../hooks/useSimilarContent";
import useContentDetails from "../../hooks/useContentDetails";
import Trailer from "./Trailer";
import Slider from "./Slider";

const WatchPage = () => {
  const { id } = useParams();
  const trailers = useContentTrailer(id);
  const similarContent = useSimilarContent(id);
  const contentDetails = useContentDetails(id);
  if (!trailers || !similarContent || !contentDetails) {
    return (
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center -z-10 shimmer" />
    );
  }

  return (
    <>
      <div className="bg-[#330022] min-h-screen text-[#FFD700]">
        <Trailer trailers={trailers} />
        <Slider content={similarContent} />
      </div>
    </>
  );
};

export default WatchPage;
