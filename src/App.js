import Featured from "./components/extra/Featured";
import Navbar from "./components/extra/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Games from "./components/Games";
import Community from "./components/Community";
import Contact from "./components/Contact";
import Footer from "./components/extra/Footer";

function App() {
  const game = {
    name: "GunZ the Duel",
    image:
      "https://mmoculture.com/wp-content/uploads/2016/03/GunZ-The-Duel.jpg",
    screenshots: [
      "https://mmoculture.com/wp-content/uploads/2016/03/GunZ-The-Duel.jpg",
      "https://mmoculture.com/wp-content/uploads/2016/03/GunZ-The-Duel.jpg",
      "https://mmoculture.com/wp-content/uploads/2016/03/GunZ-The-Duel.jpg",
      "https://mmoculture.com/wp-content/uploads/2016/03/GunZ-The-Duel.jpg",
    ],
    price: "Free to Play",
  };

  return (
    <div className="bg-[#19181a] h-[100vh]">
      <Router>
        <Navbar />
        <div className="lg:max-w-[90vw] xl:max-w-[80vw] mx-auto">
        <Featured game={game} />
        </div>
        <Routes>
          <Route path="/games" element={<Games />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
