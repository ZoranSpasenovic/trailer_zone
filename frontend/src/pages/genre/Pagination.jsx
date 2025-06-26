import { ChevronRight, ChevronLeft } from "lucide-react";

const Pagination = ({ page, setPage, totalPages }) => {
  const handleNextPage = () => {
    setPage((state) => state + 1);
  };

  const handlePrevPage = () => {
    setPage((state) => state - 1);
  };

  return (
    <div className="flex w-full justify-center">
      <div className="flex justify-between items-center gap-4 mt-8 max-w-[200px]">
        <button
          className="cursor-pointer"
          disabled={page === 1}
          onClick={handlePrevPage}
        >
          <ChevronLeft className="size-8" />
        </button>
        <span>Page {page}</span>
        <button
          className="cursor-pointer"
          disabled={page === totalPages}
          onClick={handleNextPage}
        >
          <ChevronRight className="size-8" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
