import { useState, useEffect } from "react";

import axios from "axios";

const useGenreSearch = (genres, type, page) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!genres || genres.length === 0) {
      setContent([]);
      return;
    }

    const fetchContent = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `/api/v1/${type}/genre/${genres.join(",")}?page=${page}`,
          { withCredentials: true }
        );
        setTotalPages(response.data.total_pages);
        setContent(response.data.results);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [genres, type, page]);
  return { content, loading, totalPages };
};

export default useGenreSearch;
