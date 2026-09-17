import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <main className="flex-1">
    
      <section
        className="
          relative
          min-h-[calc(100vh-72px)]
          flex
          items-center
          justify-center
          text-center
          px-4
          overflow-hidden
        "
      >
     
        <div
          className="
            absolute
            inset-0
            bg-linear-to-b
            from-[#18181B]
            via-[#0F0F12]
            to-[#09090B]
          "
        ></div>

       
        <div
          className="
            absolute
            top--25
            left-1/2
            -translate-x-1/2
            w-72
            h-72
            sm:w-96
            sm:h-96
            rounded-full
            bg-[#F5C518]/10
            blur-3xl
          "
        ></div>

  
        <div
          className="
            absolute
            bottom--37.5
            right--25
            w-72
            h-72
            sm:w-96
            sm:h-96
            rounded-full
            bg-[#F5C518]/5
            blur-3xl
          "
        ></div>

       
        <div
          className="
            relative
            z-10
            w-full
            max-w-3xl
            mx-auto
          "
        >
        
          <div
            className="
              inline-flex
              items-center
              gap-2.5
              px-4
              py-2
              rounded-full
              bg-[#18181B]
              border
              border-[#3F3F46]
              shadow-lg
              shadow-black/20
            "
          >
          
            <span className="relative flex h-2 w-2">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  rounded-full
                  bg-[#F5C518]
                  opacity-60
                  animate-ping
                "
              ></span>

              <span
                className="
                  relative
                  inline-flex
                  h-2
                  w-2
                  rounded-full
                  bg-[#F5C518]
                "
              ></span>
            </span>

           
            <span
              className="
                text-[11px]
                sm:text-xs
                font-bold
                tracking-[0.18em]
                text-[#A1A1AA]
                uppercase
              "
            >
              Discover Movies
            </span>
          </div>

          <h1
            className="
              mt-6
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-extrabold
              leading-[1.05]
              tracking-tight
              text-white
            "
          >
            Explore Your
            <span
              className="
                block
                mt-1
                text-[#F5C518]
              "
            >
              Favorite Movies
            </span>
          </h1>

          
          <p
            className="
              mt-6
              max-w-xl
              mx-auto
              text-[#A1A1AA]
              text-sm
              sm:text-base
              lg:text-lg
              leading-7
            "
          >
            Explore and discover your favorite movies from around the world 
          </p>

      
          <div className="mt-8">
            <Link
              to="/movies"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-6
                py-3.5
                sm:px-8
                sm:py-4
                rounded-xl
                bg-[#F5C518]
                text-black
                text-sm
                sm:text-base
                font-extrabold
                shadow-xl
                shadow-[#F5C518]/10
                hover:bg-[#FFD43B]
                hover:shadow-[#F5C518]/25
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <span>Explore Now</span>

           
              <svg
                className="w-5 h-5"
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
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
