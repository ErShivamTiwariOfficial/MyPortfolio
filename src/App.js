import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
// import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer"
import Technology from "./components/Technology";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      {/* <Portfolio /> */}
      <Technology />
      <Contact />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
