import { useState } from "react";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import "./app.scss";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Header isOpen={menuOpen} setIsOpen={setMenuOpen} />
      <Menu isOpen={menuOpen} setIsOpen={setMenuOpen} />
      <div className="sections">
        <Hero />
        <Features />
        <Testimonials />
      </div>
        <Footer setIsOpen={setMenuOpen}/>
    </div>
  );
}

export default App;
