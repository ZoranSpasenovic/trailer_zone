import { useState, useEffect } from "react";

import axios from "axios";

const useGenreSearch = (genres, type) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!genres || genres.length === 0) {
      setContent([]);
      return;
    }

    const fetchContent = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `/api/v1/${type}/genre/${genres.join(",")}`,
          { withCredentials: true }
        );

        setContent(response.data.results);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [genres, type]);
  return { content, loading };
};

export default useGenreSearch;
