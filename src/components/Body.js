import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"

const Body = () => {
  
  const [videoList, setVideoList] = useState(null)
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("movie")
  const [year, setYear] = useState("")
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

 
  const handleInputChange = (e) => {
    setPage(1)
    setInputValue(e.target.value)
  }

  const handleInputYear = (e) => {
    setYear(e.target.value)
  }

  const handleSearch = () => {
    setSearch(inputValue)
    setInputValue("")
  }


  useEffect(() => {
    fetchData()
  }, [search, page])

  const fetchData = async () => {
    const data = await fetch(`https://www.omdbapi.com/?apikey=177068ae&s=${search}&y=${year}&type=${type}&page=${page}`)
    const json = await data.json();
    console.log(json.Search);
    
    setVideoList(json.Search);
    setTotalResults(parseInt(json.totalResults) || 0);
  };

  const totalPages = Math.ceil(totalResults/10);

  if (videoList === null ) return <h1 className="text-center text-lg mt-10">Loading...</h1>

  return (
    <div className="px-4 sm:px-6 lg:px-12 py-6">
      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row items-center  gap-2 mb-6">
        <div className="flex w-full sm:w-auto ">
          <label className="m-2 font-semibold">Title :</label>
          <input
            className="flex-1 p-2 border border-gray-400 rounded-full focus:outline-none"
            placeholder="Search..."
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div>
            <label className="m-2 font-semibold">Year :</label>
            <input 
                 className="flex-1 p-2 w-25 border border-gray-400 rounded-full focus:outline-none " 
                 value={year} 
                 onChange={handleInputYear}
            />

            {/* Type Dropdown */}
           <label className="m-2 font-semibold">Type :</label>
             <select
                  className="p-2 m-2 border rounded-full bg-white"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
             >
                  <option value="">All</option>
                  <option value="movie">Movie</option>
                  <option value="series">Series</option>
             </select>

            <button onClick={handleSearch}  className="p-2 px-4 bg-gray-900 text-white rounded-full hover:text-blue-400">
                   Search
            </button>
          </div>
        
      </div>

      {/* Movie Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {videoList.map((movie, index) => (
          <MovieCard key={index} data={movie} />
        ))}
      </div>

      {/* Simple Pagination */}
      {totalPages > 1 && (
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
      )}
    </div>
  )
}

export default Body
