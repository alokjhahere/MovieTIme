
const Pagination = ({page, setPage, totalPages}) => {
  
  return (
        <div className="flex justify-center gap-4 mt-6">
          <button
            className="btn p-2 px-4 bg-gray-900 text-white rounded-full hover:text-blue-400"
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            Prev
          </button>
          <span className="flex items-center font-bold">
            Page {page} of {totalPages}
          </span>
          <button
            className="btn p-2 px-4 bg-gray-900 text-white rounded-full hover:text-blue-400"
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      )
}

export default Pagination
