const MovieCard = ({ data }) => {
  const { Title, Type, Poster, Year } = data;

  return (
    <div className="w-full sm:w-48 md:w-56 lg:w-64 p-3 bg-white border border-gray-200 rounded-lg shadow hover:shadow-2xl transition">
      <img
        alt={`${Title} Poster`}
        src={Poster}
        className="w-full h-60 object-cover rounded-md mb-2"
      />
      <div className="space-y-1">
        <h2 className="text-sm font-semibold truncate">{Title}</h2>
        <p className="text-xs text-gray-600 capitalize">{Type}</p>
        <p className="text-xs text-gray-500">{Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
