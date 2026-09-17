import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="
        bg-[#27272A]
        border-b
        border-[#3F3F46]
      "
    >
      <nav
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          h-16
          sm:h-18
          flex
          items-center
          justify-between
        "
      >
       

        <Link
          to="/"
          className="
            flex
            items-center
            gap-1.5
            text-xl
            sm:text-2xl
            font-extrabold
            tracking-tight
          "
        >
          <span className="text-lg sm:text-xl">🎬</span>

          <span className="text-white">MOVIE</span>

          <span className="text-[#F5C518]">EXPLORER</span>
        </Link>

       

        <Link
          to="/movies"
          className="
            group
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            sm:px-5
            sm:py-2.5
            rounded-lg
            bg-[#F5C518]
            text-black
            text-sm
            sm:text-base
            font-bold
            shadow-md
            shadow-black/20
            hover:bg-[#FFD43B]
            hover:-translate-y-0.5
            transition-all
            duration-300
          "
        >
          <span>Movies</span>

         

          <svg
            className="
              w-4
              h-4
              group-hover:translate-x-1
              transition-transform
              duration-300
            "
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
