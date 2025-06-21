import axios from "axios";
import { useState, useEffect } from "react";

const useHistory = () => {
  const [history, setHistory] = useState(null);
  useEffect(() => {
    const fetchSearchHistory = async () => {
      try {
        const response = await axios.get("/api/v1/search/history", {
          withCredentials: true,
        });

        setHistory(response.data.content);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSearchHistory();
  }, []);
  return history;
};

export default useHistory;
