import { useParams } from "react-router-dom";
import useContentTrailer from "../../hooks/useContentTrailer";
import useSimilarContent from "../../hooks/useSimilarContent";
import useContentDetails from "../../hooks/useContentDetails";
import Trailer from "./Trailer";
import SimilarContent from "./SimilarContent";
import MovieDetails from "./MovieDetails";
import { useEffect } from "react";
import useContentCredits from "../../hooks/useContentCredits";
import Cast from "./Cast";
import Shimmer from "../../components/Shimmer";

const WatchPage = () => {
  const { id } = useParams();
  const trailers = useContentTrailer(id);
  const similarContent = useSimilarContent(id);
  const contentDetails = useContentDetails(id);
  const contentCredits = useContentCredits(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  if (!trailers || !similarContent || !contentDetails) return <Shimmer />;

  return (
    <>
      <div className="bg-[#330022] min-h-screen text-[#FFD700]">
        <MovieDetails data={contentDetails} />
        <Cast cast={contentCredits} />
        <Trailer trailers={trailers} />
        <SimilarContent content={similarContent} />
      </div>
    </>
  );
};

export default WatchPage;
