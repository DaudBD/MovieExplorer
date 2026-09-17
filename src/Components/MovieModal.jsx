const MovieModal = ({ movie, onClose }) => {
 
  if (!movie) {
    return null;
  }


  const year = movie.premiered
    ? new Date(movie.premiered).getFullYear()
    : "N/A";

  
  const rating = movie.rating?.average || "N/A";

 
  const summary = movie.summary
    ? movie.summary.replace(/<[^>]*>/g, "")
    : "No overview available.";

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/80
        px-4
        py-6
      "
      onClick={onClose}
    >
  
      <div
        className="
          relative
          w-full
          max-w-4xl
          max-h-[90vh]
          overflow-y-auto
          rounded-2xl
          bg-[#18181B]
          border
          border-[#3F3F46]
          shadow-2xl
        "
        onClick={(e) => e.stopPropagation()}
      >
       
        <button
          onClick={onClose}
          className="
            absolute
            right-4
            top-4
            z-10
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-black/70
            text-xl
            text-white
            hover:bg-[#F5C518]
            hover:text-black
            transition
          "
          aria-label="Close modal"
        >
          ✕
        </button>

     
        <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
          <img
            src={
              movie.image?.original ||
              movie.image?.medium ||
              "https://via.placeholder.com/1200x600?text=No+Image"
            }
            alt={movie.name}
            className="h-full w-full object-cover"
          />

      
          <div
            className="
              absolute
              inset-0
              bg-linear-to-t
              from-[#18181B]
              via-black/30
              to-transparent
            "
          />
        </div>

 
        <div className="px-5 pb-7 sm:px-8">
          {/* Title */}
          <h2
            className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              font-extrabold
              text-white
            "
          >
            {movie.name}
          </h2>

         
          <div
            className="
              mt-4
              flex
              flex-wrap
              items-center
              gap-3
              text-sm
            "
          >
            
            <span className="text-[#F5C518] font-bold">⭐ {rating}</span>

         
            <span className="text-[#A1A1AA]">📅 {year}</span>

        
            {movie.genres?.map((genre) => (
              <span
                key={genre}
                className="
                  rounded-md
                  bg-[#27272A]
                  px-3
                  py-1
                  text-[#A1A1AA]
                "
              >
                {genre}
              </span>
            ))}
          </div>

        
          <div className="mt-6">
            <h3 className="text-lg font-bold text-white">Overview</h3>

            <p
              className="
                mt-2
                text-sm
                sm:text-base
                leading-7
                text-[#A1A1AA]
              "
            >
              {summary}
            </p>
          </div>

          {/* Additional Information */}
          <div
            className="
              mt-6
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-4
            "
          >
        
            <div className="rounded-xl bg-[#27272A] p-4">
              <p className="text-xs text-[#71717A]">Release Date</p>

              <p className="mt-1 text-sm font-semibold text-white">
                {movie.premiered || "N/A"}
              </p>
            </div>

      
            <div className="rounded-xl bg-[#27272A] p-4">
              <p className="text-xs text-[#71717A]">Language</p>

              <p className="mt-1 text-sm font-semibold text-white">
                {movie.language || "N/A"}
              </p>
            </div>

            {/* Runtime */}
            <div className="rounded-xl bg-[#27272A] p-4">
              <p className="text-xs text-[#71717A]">Runtime</p>

              <p className="mt-1 text-sm font-semibold text-white">
                {movie.runtime ? `${movie.runtime} minutes` : "N/A"}
              </p>
            </div>

           
            <div className="rounded-xl bg-[#27272A] p-4">
              <p className="text-xs text-[#71717A]">Status</p>

              <p className="mt-1 text-sm font-semibold text-white">
                {movie.status || "N/A"}
              </p>
            </div>
          </div>

      
          <div className="flex justify-end mt-6">
            <button
              onClick={onClose}
              className="
                inline-flex
                items-center
                gap-2
                px-5
                py-2.5
                rounded-lg
                bg-[#27272A]
                text-white
                text-sm
                font-semibold
                hover:bg-[#F5C518]
                hover:text-black
                transition
              "
            >
              ❌ Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
