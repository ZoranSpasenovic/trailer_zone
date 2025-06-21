import { useContentStore } from "../store/content";
import { useEffect, useState } from "react";
import axios from "axios";

const useRandomContent = () => {
  const [randomContent, setRandomContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const { contentType } = useContentStore();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/v1/${contentType}/trending`, {
        withCredentials: true,
      })
      .then((res) => {
        setRandomContent(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [contentType]);

  return { randomContent, loading };
};

export default useRandomContent;
