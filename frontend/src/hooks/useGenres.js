import { movieGenresMap, seriesGenresMap } from "../constants/genres";

const useGenres = (genres, contentType) => {
  return contentType === "movie"
    ? genres.map((genre) => movieGenresMap[genre])
    : genres.map((genre) => seriesGenresMap[genre]);
};

export default useGenres;
