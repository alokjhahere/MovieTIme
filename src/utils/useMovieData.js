import { useEffect, useState } from "react"
const useMovieData = () => {
      const [videoList, setVideoList] = useState(null)
      const [search, setSearch] = useState("movie")
      const [year, setYear] = useState("")
      const [type, setType] = useState("");
      const [page, setPage] = useState(1);
      const [totalResults, setTotalResults] = useState(0);
      const [error, setError] = useState("")
    
    useEffect(() => {
    fetchData()
     }, [search, page]);

    const fetchData = async () => {
      try{
        setError("");
        const data = await fetch(`https://www.omdbapi.com/?i=12&apikey=177068ae&s=${search}&y=${year}&type=${type}&page=${page}`)
        const json = await data.json();

        if (json.Response === "False") {
        setError(json.Error || "Something went wrong");
        setTotalResults(0);
        return;
        }
    
        setVideoList(json.Search);
        setTotalResults(parseInt(json.totalResults) || 0);
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
    } 
    
  };

    return {
        videoList,
        setVideoList,
        search,
        setSearch,
        year,
        setYear,
        type,
        setType,
        error,
        setError,
        page,
        setPage,
        totalResults,
        setTotalResults
    }
}

export default useMovieData
