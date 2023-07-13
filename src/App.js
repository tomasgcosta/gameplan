import Featured from "./components/Featured";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Games from "./components/extra/Games";
import Community from "./components/extra/Community";
import Contact from "./components/extra/Contact";

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
    <div className="bg-[#19181a] h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/games" element={<Games />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

      <div className="lg:max-w-[90vw] xl:max-w-[80vw] mx-auto">
        <Featured game={game} />
        {/* Discounted */}

        {/* Footer */}
      </div>
    </div>
  );
}

export default App;
