import { useEffect, useState } from "react";
import { useContentStore } from "../store/content";
import axios from "axios";

const useContentDetails = (id) => {
  const [contentDetails, setContentDetails] = useState([]);

  const { contentType } = useContentStore();

  useEffect(() => {
    const fetchContentDetails = async () => {
      const response = await axios.get(
        `http://localhost:5050/api/v1/${contentType}/${id}/details`,
        { withCredentials: true }
      );

      setContentDetails(response.data);
    };
    fetchContentDetails();
  }, [id, contentType]);
  return contentDetails;
};

export default useContentDetails;
