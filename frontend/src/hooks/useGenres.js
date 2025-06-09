import { genresMap } from "../constants/genres";

const useGenres = (genres) => {
  return genres.map((genre) => genresMap[genre]);
};

export default useGenres;
