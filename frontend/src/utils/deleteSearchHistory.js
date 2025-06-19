import axios from "axios";

const deleteSearchHistory = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:5050/api/v1/search/history/${id}`,
      { withCredentials: true }
    );
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export default deleteSearchHistory;
