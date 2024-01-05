import "../../app.scss";
import { useState } from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Hero from "../Hero/Hero";
import Features from "../Features/Features";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";

export default function HomeApp() {
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
