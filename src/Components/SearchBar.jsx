const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="max-w-3xl mx-auto mt-8 sm:mt-10">
      <div className="relative">

        <svg
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            w-5
            h-5
            text-[#71717A]
          "
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>

      
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a movie..."
          className="
            w-full
            h-12
            sm:h-14
            pl-12
            pr-4
            rounded-xl
            bg-[#18181B]
            border
            border-[#3F3F46]
            text-white
            text-sm
            sm:text-base
            placeholder:text-[#71717A]
            outline-none
            focus:border-[#F5C518]
            focus:ring-2
            focus:ring-[#F5C518]/10
            transition
          "
        />
      </div>
    </div>
  );
};

export default SearchBar;
