import { useEffect, useState } from "react";
import { useContentStore } from "../../store/content";
import axios from "axios";
import { Link } from "react-router-dom";
import ContentCard from "../../components/ContentCard";

const Content = ({ ctg }) => {
  const [content, setContent] = useState(null);
  const { contentType } = useContentStore();

  useEffect(() => {
    const getContent = async () => {
      try {
        const response = await axios.get(`/api/v1/${contentType}/${ctg}`, {
          withCredentials: true,
        });

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
          return <ContentCard item={item} />;
        })}
      </div>
    </div>
  );
};

export default Content;
