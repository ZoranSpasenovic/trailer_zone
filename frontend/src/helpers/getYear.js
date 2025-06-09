export const getYear = (content) => {
  const date = content?.release_date || content?.first_air_date;
  return typeof date === "string" ? date.slice(0, 4) : "N/A";
};
