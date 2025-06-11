import { useParams } from "react-router-dom";
import useContentTrailer from "../../hooks/useContentTrailer";
import useSimilarContent from "../../hooks/useSimilarContent";
import useContentDetails from "../../hooks/useContentDetails";

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
  console.log(contentDetails);

  return <div>WatchPage</div>;
};

export default WatchPage;
