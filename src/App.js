import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavbarComp from "./Components/Navigation/NavbarComp";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Work from "./Components/Pages/Work";
import Home from "./Components/Pages/Home";
import Footer from "./Components/Navigation/Footer";



function App() {
  return (
    <div className="App">
      <Router>
      <NavbarComp />
      <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/about" element={ <About/> } />
      <Route path="/contact-me" element={ <Contact/> } />
      <Route path="/work" element={ <Work/> } />
      </Routes>
      </Router>
      <Footer />
      

    </div>
  );
}

export default App;
