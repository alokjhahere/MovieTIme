'use client'; // Needed if using Next.js App Router and hooks

import { useState } from "react";
import MovieCard from "./MovieCard";
import useMovieData from "../utils/useMovieData";
import Filter from "./Filter";
import Pagination from "./Pagination";



const Body = () => {
  // Cutom hook
  const {
    videoList,
    setSearch,
    year,
    setYear,
    type,
    setType,
    error,
    page,
    setPage,
    totalResults
  } = useMovieData();

  const [inputValue, setInputValue] = useState<string>("");

  const totalPages = Math.ceil(totalResults / 10);

  if (videoList === null)
    return <h1 className="text-center text-lg mt-10">Loading...</h1>;

  return (
    <div className="px-4 sm:px-6 lg:px-12 py-6">
      {/* Filter */}
      <Filter
        inputValue={inputValue}
        setInputValue={setInputValue}
        year={year}
        setYear={setYear}
        type={type}
        setType={setType}
        setSearch={setSearch}
      />

      {/* Error State */}
      {error && (
        <p className="text-center text-red-500 mt-10">{error}</p>
      )}

      {/* Empty State */}
      {!error && videoList.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No results found. Try a different search.
        </p>
      )}

      {/* Movie Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {videoList.map((movie, index) => (
          <MovieCard key={index} data={movie} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
};

export default Body;
