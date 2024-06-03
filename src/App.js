import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocilaLinks from "./components/SocilaLinks";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>

      <SocilaLinks/>
    </div>
  );
}

export default App;
