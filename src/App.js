import Featured from "./components/extra/Featured";
import Navbar from "./components/extra/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Games from "./components/pages/Games";
import Categories from "./components/pages/Categories";
import Contact from "./components/pages/Contact";
import Footer from "./components/extra/Footer";

import featured_game_image from './assets/game_logos/gunz.jpg'
import {gunz1, gunz2, gunz3, gunz4} from './assets/game_screenshots/'
import Signup from "./components/extra/Signup";
import CategoryPage from "./components/extra/CategoryPage";

function App() {
  const game = {
    name: "GunZ the Duel",
    image: featured_game_image,
    screenshots: [
      gunz1,
      gunz2,
      gunz3,
      gunz4,
    ],
    price: "Free to Play",
  };

  return (
    <div className="bg-[#19181a] min-h-screen">
      <Router>
        <Navbar />
        <div className="lg:max-w-[80vw] xl:max-w-[80vw] lg:mx-auto">
        <Featured game={game} />
        </div>
        <div className="lg:max-w-[80vw] xl:max-w-[80vw]  lg:mx-auto">
        <Routes>
          <Route path="/games" element={<Games />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path= "/signup" element={<Signup />} />
          <Route path= "/category/:title" element={<CategoryPage/>} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
