
const Filter = ({inputValue, setInputValue, year, setYear, type, setType, setSearch}) => {

    const handleInputChange = (e) => {
    setInputValue(e.target.value)
     }

  const handleInputYear = (e) => {
    setYear(e.target.value)
     }

  const handleSearch = () => {
    setSearch(inputValue)
    setInputValue("")
     }

  return (
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
  )
}

export default Filter
