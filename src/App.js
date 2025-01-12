import About from "./components/About";
import Contact from "./components/Contact";
import Technology from "./components/Technology";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Project />
      <Technology />
      <Contact />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
