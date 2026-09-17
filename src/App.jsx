import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
