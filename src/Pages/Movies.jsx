import { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MovieCard from "../Components/MovieCard";
import MovieModal from "../Components/MovieModal";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [visibleMovies, setVisibleMovies] = useState(15);

  // Selected movie for modal
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch movies
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError("");

        let url;

        // Search API
        if (search.trim()) {
          url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(
            search,
          )}`;
        } else {
          // All Shows API
          url = "https://api.tvmaze.com/shows";
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("API request failed");
        }

        const data = await response.json();

        // Search API returns [{ score, show }]
        if (search.trim()) {
          const searchMovies = data.map((item) => item.show);

          setMovies(searchMovies);
        } else {
          // /shows returns show objects directly
          setMovies(data);
        }

        // Reset to first 12
        setVisibleMovies(15);
      } catch (err) {
        console.error(err);

        setError("Failed to load movies.");
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [search]);

  // More Movies
  const handleMoreMovies = () => {
    setVisibleMovies((prev) => prev + 15);
  };

  return (
    <>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="min-h-screen bg-[#09090B] text-white">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Page Title */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              Explore <span className="text-[#F5C518]">Movies</span>
            </h1>

            <p className="mt-3 text-sm sm:text-base text-[#A1A1AA]">
              Discover your favorite movies and TV shows
            </p>
          </div>

          {/* Search Bar */}
          <SearchBar search={search} setSearch={setSearch} />

          {/* Content */}
          <div className="mt-10">
            {/* Loading */}
            {loading && (
              <div className="flex justify-center py-20">
                <div className="text-center">
                  <div
                    className="
                      w-10
                      h-10
                      mx-auto
                      rounded-full
                      border-4
                      border-[#3F3F46]
                      border-t-[#F5C518]
                      animate-spin
                    "
                  />

                  <p className="mt-4 text-[#A1A1AA]">Loading movies...</p>
                </div>
              </div>
            )}

            {/* Error */}
            {!loading && error && (
              <div className="text-center py-20">
                <p className="text-red-400">{error}</p>
              </div>
            )}

            {/* No Results */}
            {!loading && !error && movies.length === 0 && (
              <div className="flex justify-center px-4 py-16 sm:py-20">
                <div className="w-full max-w-md rounded-xl border border-[#F5C518]/30 bg-[#18181B] px-5 py-5 sm:px-6 sm:py-6 text-center shadow-lg">
                  <h3 className="text-lg sm:text-xl font-bold text-[#F5C518]">
                    No Movies Found
                  </h3>

                  <p className="mt-2 text-sm sm:text-base text-[#A1A1AA]">
                    Please try another movie or TV series name.
                  </p>
                </div>
              </div>
            )}

            {/* Movie Grid */}
            {!loading && !error && movies.length > 0 && (
              <>
                <div
                  className="
                      grid
                      grid-cols-1
                      sm:grid-cols-2
                      md:grid-cols-4
                      lg:grid-cols-5
                      gap-4
                      sm:gap-5
                      lg:gap-6
                    "
                >
                  {movies.slice(0, visibleMovies).map((movie) => (
                    <MovieCard
                      key={movie.id}
                      movie={movie}
                      onDetails={(movie) => {
                        setSelectedMovie(movie);
                      }}
                    />
                  ))}
                </div>

                {/* More Movies Button */}
                {visibleMovies < movies.length && (
                  <div className="flex justify-center mt-10">
                    <button
                      onClick={handleMoreMovies}
                      className="
                          px-6
                          py-3
                          rounded-lg
                          bg-[#F5C518]
                          text-black
                          font-bold
                          hover:bg-[#FFD43B]
                          hover:-translate-y-0.5
                          transition-all
                          duration-300
                        "
                    >
                      More Movies
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>

      {/* Movie Details Modal */}
      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Movies;
