import { Link } from "react-router-dom";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#09090B]">
      {/* Header */}
      <Header />

      {/* 404 Content */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center">
          {/* 404 */}
          <h1
            className="
              text-8xl
              sm:text-9xl
              font-extrabold
              text-[#F5C518]
            "
          >
            404
          </h1>

          {/* Title */}
          <h2
            className="
              mt-4
              text-2xl
              sm:text-3xl
              font-bold
              text-white
            "
          >
            Page Not Found
          </h2>

          {/* Description */}
          <p
            className="
              mt-3
              text-sm
              sm:text-base
              text-[#A1A1AA]
            "
          >
            Sorry, the page you are looking for doesn't exist.
          </p>

          {/* Back Home */}
          <Link
            to="/"
            className="
              inline-flex
              items-center
              gap-2
              mt-7
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
            ← Back to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NotFound;
