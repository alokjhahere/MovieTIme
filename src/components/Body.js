import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"

const Body = () => {
  
  const [videoList, setVideoList] = useState(null)
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("movie")
 
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSearch = () => {
    setSearch(inputValue)
  }

  const handleMovieFilter = () => {
    setSearch("movie")
  }

  const handleSeriesFilter = () => {
    setSearch("series")
  }

  useEffect(() => {
    fetchData()
  }, [search])

  const fetchData = async () => {
    const data = await fetch(`https://www.omdbapi.com/?apikey=177068ae&s=${search}`)
    const json = await data.json();
    console.log(json.Search);
    
    setVideoList(json.Search);
  }

  if (videoList === null ) return <h1 className="text-center text-lg mt-10">Loading...</h1>

  return (
    <div className="px-4 sm:px-6 lg:px-12 py-6">
      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <div className="flex w-full sm:w-auto ">
          <input
            className="flex-1 p-2 border border-gray-400 rounded-l-full focus:outline-none"
            placeholder="Search..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={handleSearch}  className="p-2 px-4 bg-gray-900 text-white rounded-r-full hover:text-blue-400">
            Search
          </button>
        </div>
        <div className="flex gap-2">
          <button className="p-2 px-4 bg-gray-900 text-white rounded-full hover:text-blue-400" onClick={handleMovieFilter}>Movies</button>
          <button className="p-2 px-4 bg-gray-900 text-white rounded-full hover:text-blue-400" onClick={handleSeriesFilter}>Series</button>
        </div>
        
      </div>

      {/* Movie Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {videoList.map((movie, index) => (
          <MovieCard key={index} data={movie} />
        ))}
      </div>
    </div>
  )
}

export default Body
