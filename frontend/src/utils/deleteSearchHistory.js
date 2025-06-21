import axios from "axios";

const deleteSearchHistory = async (id) => {
  try {
    const response = await axios.delete(`/api/v1/search/history/${id}`, {
      withCredentials: true,
    });
  } catch (err) {
    console.log(err);
  }
};

export default deleteSearchHistory;
