import { useEffect, useState } from "react";
import { useContentStore } from "../store/content";
import axios from "axios";

const useContentCredits = (id) => {
  const [contentCredits, setContentCredits] = useState([]);

  const { contentType } = useContentStore();

  useEffect(() => {
    const fetchContentCredits = async () => {
      const response = await axios.get(`/api/v1/${contentType}/${id}/credits`, {
        withCredentials: true,
      });

      setContentCredits(response.data.cast);
    };
    fetchContentCredits();
  }, [id, contentType]);
  return contentCredits;
};

export default useContentCredits;
