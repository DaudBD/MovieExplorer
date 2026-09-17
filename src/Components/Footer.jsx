const Footer = () => {
  return (
    <footer
      className="
        bg-[#18181B]
        border-t
        border-[#3F3F46]
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          py-6
          flex
          flex-col
          sm:flex-row
          items-center
          justify-between
          gap-4
        "
      >
      
        <p
          className="
            text-xl
            sm:text-2xl
            font-bold
          "
        >
          <span className="text-white">Movie</span>

          <span className="text-[#F5C518]">Explorer</span>
        </p>

       
        <p
          className="
            text-xs
            sm:text-sm
            text-[#71717A]
            text-center
          "
        >
          © {new Date().getFullYear()} MovieExplorer. All rights reserved.
        </p>

        
        <a
          href="https://github.com/DaudBD"
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-sm
            text-[#A1A1AA]
            hover:text-[#F5C518]
            transition-colors
            duration-300
          "
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
