import { Trash } from "lucide-react";
import deleteSearchHistory from "../../utils/deleteSearchHistory";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HistoryPage = () => {
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

  function formatDate(dateString) {
    const date = new Date(dateString);

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const month = monthNames[date.getUTCMonth()];
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();

    return `${month} ${day}, ${year}`;
  }

  const handleDelete = async (id) => {
    try {
      await deleteSearchHistory(id);
      setHistory((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  if (history?.length === 0) {
    return (
      <div className="bg-[#330022] min-h-screen py-20 text-[#FFD700]">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex justify-center items-center h-96">
            <p className="text-xl">No search history found</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#330022] min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl text-[#FFD700] font-bold mb-8">
          Search History
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-4">
          {history?.map((entry, idx) => (
            <Link to={`/watch/${entry.id}`}>
              <div
                key={idx}
                className="bg-[#1a0011] p-4 rounded flex items-start"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${entry.image}`}
                  alt="History image"
                  className="size-16 rounded-full object-cover mr-4"
                />
                <div className="flex flex-col">
                  <span className="text-[#FFD700] text-lg">{entry.title}</span>
                  <span className="text-[#BFAF60] text-sm">
                    {formatDate(entry.createdAt)}
                  </span>
                </div>

                <span className="py-1 px-3 min-w-20 text-center rounded-full text-sm  ml-auto bg-[#FFD700]">
                  {entry.searchType[0].toUpperCase() +
                    entry.searchType.slice(1)}
                </span>
                <Trash
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    handleDelete(entry.id);
                  }}
                  className="size-5 ml-4 cursor-pointer text-[#FFD700] hover:fill-[#FFD700]"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
