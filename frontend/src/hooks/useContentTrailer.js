import { useEffect, useState } from "react";
import { useContentStore } from "../store/content";
import axios from "axios";

const useContentTrailer = (id) => {
  const { contentType } = useContentStore();
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchTrailers = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5050/api/v1/${contentType}/${id}/trailers`,
          { withCredentials: true }
        );
        const filteredTrailers = response.data
          .filter((trailer) => {
            return (trailer.type === "Trailer") & (trailer.site === "YouTube");
          })
          .sort((a, b) => {
            if (
              a.name.toLowerCase().includes("official trailer") &&
              !b.name.toLowerCase().includes("official trailer")
            ) {
              return -1;
            } else if (
              !a.name.toLowerCase().includes("official trailer") &&
              b.name.toLowerCase().includes("official trailer")
            ) {
              return 1;
            } else {
              return 0;
            }
          });

        setContent(filteredTrailers);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTrailers();
  }, [contentType, id]);

  return content;
};

export default useContentTrailer;
