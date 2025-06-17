import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const useSearch = (type) => {
  const [content, setContent] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (!query || query.trim() === "") {
      setContent([]);
      return;
    }

    const delayFetch = setTimeout(() => {
      const fetchContent = async () => {
        try {
          console.log(type);
          const response = await axios.get(
            `http://localhost:5050/api/v1/search/${type}?query=${encodeURIComponent(
              query
            )}`,
            { withCredentials: true }
          );
          setContent(response.data);
        } catch (err) {
          console.log(err);
        }
      };

      fetchContent();
    }, 500);

    return () => clearTimeout(delayFetch);
  }, [query, type]);

  return content;
};

export default useSearch;
