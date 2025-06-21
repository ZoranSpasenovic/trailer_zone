import { useEffect, useState } from "react";
import axios from "axios";
import { useContentStore } from "../store/content";

const useSimilarContent = (id) => {
  const [similarContent, setSimilarContent] = useState([]);
  const { contentType } = useContentStore();

  useEffect(() => {
    const fetchSimilarContent = async () => {
      const response = await axios.get(`/api/v1/${contentType}/${id}/similar`, {
        withCredentials: true,
      });
      setSimilarContent(response.data);
    };

    fetchSimilarContent();
  }, [id, contentType]);
  return similarContent;
};

export default useSimilarContent;
