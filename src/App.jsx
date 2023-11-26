import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setshowScrollBtn(true);
      } else {
        setshowScrollBtn(false);
      }
    });
  }, []);
  const [showScrollBtn, setshowScrollBtn] = useState(false);

  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      <a
        style={{ opacity: showScrollBtn ? 1 : 0, transition: ".7s" }}
        href="#up"
      >
        <button className="scrolltop icon-keyboard_arrow_up"></button>
      </a>
    </div>
  );
}

export default App;
