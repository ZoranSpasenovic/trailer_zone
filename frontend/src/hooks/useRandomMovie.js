import { useState, useEffect } from "react";

const useRandomMovie = () => {
  const [randomMovie, setRandomMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5050/api/v1/movie/trending", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setRandomMovie(data);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return { randomMovie, loading };
};

export default useRandomMovie;
