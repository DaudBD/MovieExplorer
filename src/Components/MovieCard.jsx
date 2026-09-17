const MovieCard = ({ movie, onDetails }) => {
  const year = movie.premiered
    ? new Date(movie.premiered).getFullYear()
    : "N/A";

  const rating = movie.rating?.average || "N/A";

  return (
    <article
      className="
        group
        overflow-hidden
        rounded-xl
        bg-[#18181B]
        border
        border-[#27272A]
        hover:border-[#F5C518]/50
        transition-all
        duration-300
      "
    >
      
      <div className="relative aspect-2/3 overflow-hidden bg-[#27272A]">
        <img
          src={
            movie.image?.medium ||
            movie.image?.original ||
            "https://via.placeholder.com/300x450?text=No+Image"
          }
          alt={movie.name}
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-105
            transition-transform
            duration-500
          "
        />
      </div>

      <div className="p-3 sm:p-4">
      
        <h2
          className="
            text-sm
            sm:text-base
            font-bold
            text-white
            truncate
          "
          title={movie.name}
        >
          {movie.name}
        </h2>

        <div
          className="
            flex
            items-center
            gap-2
            mt-2
            text-xs
            sm:text-sm
            text-[#A1A1AA]
          "
        >
          <span className="text-[#F5C518]">⭐ {rating}</span>

          <span>•</span>

          <span>📅 {year}</span>
        </div>

       
        <button
          onClick={() => onDetails(movie)}
          className="
            w-full
            mt-4
            py-2
            rounded-lg
            bg-[#F5C518]
            text-black
            text-xs
            sm:text-sm
            font-bold
            hover:bg-[#FFD43B]
            hover:-translate-y-0.5
            transition-all
            duration-300
          "
        >
          See Details
        </button>
      </div>
    </article>
  );
};

export default MovieCard;
