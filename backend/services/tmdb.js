const axios = require("axios");

const fetchTMDB = async (url) => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  };

  const response = await axios.get(url, options);

  if (response.status !== 200) {
    throw new Error("Failed to fetch: " + response.statusText);
  }
  const { data } = response;
  return data;
};

module.exports = {
  fetchTMDB,
};
